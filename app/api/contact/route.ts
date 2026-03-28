import { NextRequest, NextResponse } from "next/server";
import {
  appendContactRowToGoogleSheet,
  forwardContactToAppsScript,
  getAppsScriptWebhookUrl,
  isGoogleSheetsServerConfigured,
} from "@/lib/server/googleSheetContact";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type JsonBody = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

function parseBody(body: JsonBody): { ok: true; data: { name: string; email: string; message: string } } | { ok: false; message: string } {
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name) return { ok: false, message: "Name is required." };
  if (!email) return { ok: false, message: "Email is required." };
  if (!EMAIL_RE.test(email)) {
    return { ok: false, message: "Enter a valid email address." };
  }
  if (!message) return { ok: false, message: "Message is required." };

  return { ok: true, data: { name, email, message } };
}

export async function POST(request: NextRequest) {
  let json: JsonBody;
  try {
    json = (await request.json()) as JsonBody;
  } catch {
    return NextResponse.json(
      { message: "Invalid request body. Expected JSON." },
      { status: 400 }
    );
  }

  const parsed = parseBody(json);
  if (!parsed.ok) {
    return NextResponse.json({ message: parsed.message }, { status: 400 });
  }

  const appsUrl = getAppsScriptWebhookUrl();
  if (appsUrl) {
    try {
      await forwardContactToAppsScript(appsUrl, parsed.data);
      return NextResponse.json({ ok: true });
    } catch (err) {
      console.error("Apps Script contact forward failed:", err);
      return NextResponse.json(
        {
          message:
            "We could not reach the form handler. Check the Apps Script deployment URL.",
        },
        { status: 502 }
      );
    }
  }

  if (!isGoogleSheetsServerConfigured()) {
    return NextResponse.json(
      {
        message:
          "Contact form is not configured. Set GOOGLE_APPS_SCRIPT_WEB_APP_URL or Google Sheets service account variables on the server.",
      },
      { status: 503 }
    );
  }

  try {
    await appendContactRowToGoogleSheet(parsed.data);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Google Sheets append failed:", err);
    const msg =
      err instanceof Error && err.message === "MISSING_GOOGLE_SHEETS_CONFIG"
        ? "Server is missing Google Sheets configuration."
        : "Could not save your message. Check that the sheet is shared with the service account and Sheets API is enabled.";
    return NextResponse.json({ message: msg }, { status: 500 });
  }
}
