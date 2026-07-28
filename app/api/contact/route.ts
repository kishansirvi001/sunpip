import { NextResponse } from "next/server";

type ContactLead = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  city?: unknown;
  electricityBill?: unknown;
  roofType?: unknown;
  message?: unknown;
};

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function formatLeadMessage(lead: Required<Record<keyof ContactLead, string>>) {
  const electricityBill = lead.electricityBill ? `Rs. ${lead.electricityBill}` : "Not provided";

  return [
    "<b>New Contact / Site Visit Lead</b>",
    "",
    `<b>Name:</b> ${escapeHtml(lead.name)}`,
    `<b>Phone:</b> ${escapeHtml(lead.phone)}`,
    `<b>Email:</b> ${escapeHtml(lead.email)}`,
    `<b>City:</b> ${escapeHtml(lead.city)}`,
    `<b>Electricity Bill:</b> ${escapeHtml(electricityBill)}`,
    `<b>Roof Type:</b> ${escapeHtml(lead.roofType)}`,
    "",
    `<b>Message:</b> ${escapeHtml(lead.message)}`,
  ].join("\n");
}

export async function POST(request: Request) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();

  if (!botToken || !chatId) {
    return NextResponse.json(
      { message: "Telegram lead alerts are not configured yet." },
      { status: 503 },
    );
  }

  let payload: ContactLead;

  try {
    payload = (await request.json()) as ContactLead;
  } catch {
    return NextResponse.json({ message: "Invalid contact request." }, { status: 400 });
  }

  const lead = {
    name: text(payload.name),
    email: text(payload.email),
    phone: text(payload.phone),
    city: text(payload.city),
    electricityBill: text(payload.electricityBill),
    roofType: text(payload.roofType),
    message: text(payload.message),
  };

  if (!lead.name || !lead.email.includes("@") || lead.phone.length < 8 || !lead.city || lead.message.length < 10) {
    return NextResponse.json(
      { message: "Please complete all fields with valid details." },
      { status: 400 },
    );
  }

  let telegramResponse: Response;

  try {
    telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: formatLeadMessage(lead),
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });
  } catch (error) {
    console.error("Telegram contact alert request failed", error);
    return NextResponse.json(
      { message: "Could not connect to Telegram. Please try again later." },
      { status: 502 },
    );
  }

  if (!telegramResponse.ok) {
    const telegramError = (await telegramResponse.json().catch(() => null)) as {
      description?: string;
    } | null;
    const reason = telegramError?.description ?? `Telegram API returned ${telegramResponse.status}`;

    console.error("Telegram contact alert failed", {
      status: telegramResponse.status,
      reason,
    });

    return NextResponse.json(
      { message: `Could not send Telegram lead alert: ${reason}` },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Contact request sent." });
}
