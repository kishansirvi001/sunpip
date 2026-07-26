import { NextResponse } from "next/server";

type QuoteLead = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  city?: unknown;
  service?: unknown;
  state?: unknown;
  roofType?: unknown;
  monthlyBill?: unknown;
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

function formatLeadMessage(lead: Required<Record<keyof QuoteLead, string>>) {
  const notes = lead.message || "Not provided";

  return [
    "<b>New Solar Quote Lead</b>",
    "",
    `<b>Name:</b> ${escapeHtml(lead.name)}`,
    `<b>Phone:</b> ${escapeHtml(lead.phone)}`,
    `<b>Email:</b> ${escapeHtml(lead.email)}`,
    `<b>City:</b> ${escapeHtml(lead.city)}`,
    `<b>State:</b> ${escapeHtml(lead.state)}`,
    `<b>Service:</b> ${escapeHtml(lead.service)}`,
    `<b>Roof Type:</b> ${escapeHtml(lead.roofType)}`,
    `<b>Monthly Bill:</b> Rs. ${escapeHtml(lead.monthlyBill)}`,
    "",
    `<b>Project Notes:</b> ${escapeHtml(notes)}`,
  ].join("\n");
}

export async function POST(request: Request) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return NextResponse.json(
      { message: "Telegram lead alerts are not configured yet." },
      { status: 503 },
    );
  }

  let payload: QuoteLead;

  try {
    payload = (await request.json()) as QuoteLead;
  } catch {
    return NextResponse.json({ message: "Invalid quote request." }, { status: 400 });
  }

  const lead = {
    name: text(payload.name),
    email: text(payload.email),
    phone: text(payload.phone),
    city: text(payload.city),
    service: text(payload.service),
    state: text(payload.state),
    roofType: text(payload.roofType),
    monthlyBill: text(payload.monthlyBill),
    message: text(payload.message),
  };

  const bill = Number(lead.monthlyBill);

  if (!lead.name || !lead.email.includes("@") || lead.phone.length < 8 || !lead.city || !bill || bill < 500) {
    return NextResponse.json(
      { message: "Please add valid contact details, city, and monthly bill." },
      { status: 400 },
    );
  }

  const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: formatLeadMessage(lead),
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  });

  if (!telegramResponse.ok) {
    return NextResponse.json(
      { message: "Could not send Telegram lead alert." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Quote request sent." });
}
