import { google } from "googleapis";

export type ContactRow = {
  name: string;
  email: string;
  message: string;
};

function loadServiceAccountCredentials():
  | { client_email: string; private_key: string }
  | null {
  const rawJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON?.trim();
  if (rawJson) {
    try {
      const j = JSON.parse(rawJson) as {
        client_email?: string;
        private_key?: string;
      };
      if (j.client_email && j.private_key) {
        return {
          client_email: j.client_email,
          private_key: j.private_key.replace(/\\n/g, "\n"),
        };
      }
    } catch {
      return null;
    }
  }

  const email = process.env.GOOGLE_SHEETS_CLIENT_EMAIL?.trim();
  const key = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n");
  if (email && key) {
    return { client_email: email, private_key: key };
  }

  return null;
}

/**
 * Append one row to the configured spreadsheet (server-side only).
 * Sheet must be shared with the service account email (Editor).
 */
export async function appendContactRowToGoogleSheet(
  row: ContactRow
): Promise<void> {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID?.trim();
  const credentials = loadServiceAccountCredentials();

  if (!spreadsheetId || !credentials) {
    throw new Error("MISSING_GOOGLE_SHEETS_CONFIG");
  }

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const range =
    process.env.GOOGLE_SHEETS_RANGE?.trim() || "Sheet1!A1";

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [
        [
          row.name,
          row.email,
          row.message,
          new Date().toISOString(),
        ],
      ],
    },
  });
}

/**
 * Optional: POST the same JSON to a Google Apps Script "Web app" URL
 * (deploy as Execute as me, Anyone / Anyone with Google can access).
 */
export async function forwardContactToAppsScript(
  url: string,
  row: ContactRow
): Promise<void> {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: row.name,
      email: row.email,
      message: row.message,
    }),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(
      `Apps Script HTTP ${response.status}${text ? `: ${text.slice(0, 200)}` : ""}`
    );
  }
}

export function getAppsScriptWebhookUrl(): string | null {
  const u = process.env.GOOGLE_APPS_SCRIPT_WEB_APP_URL?.trim();
  if (!u) return null;
  try {
    new URL(u);
    return u;
  } catch {
    return null;
  }
}

export function isGoogleSheetsServerConfigured(): boolean {
  if (getAppsScriptWebhookUrl()) return true;
  const id = process.env.GOOGLE_SHEETS_SPREADSHEET_ID?.trim();
  return Boolean(id && loadServiceAccountCredentials());
}
