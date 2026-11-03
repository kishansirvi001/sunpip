import { NextResponse } from "next/server";

type QuoteLead = {
  leadType?: unknown;
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  whatsappNumber?: unknown;
  city?: unknown;
  customerType?: unknown;
  service?: unknown;
  interestedIn?: unknown;
  state?: unknown;
  roofType?: unknown;
  monthlyBill?: unknown;
  roofArea?: unknown;
  billFileName?: unknown;
  billFileNote?: unknown;
  calculatorSource?: unknown;
  message?: unknown;
  website?: unknown;
  leadSource?: unknown;
  calculatorInputs?: unknown;
  calculatorOutputs?: unknown;
  utm?: unknown;
};

type NormalizedLead = Required<Record<keyof QuoteLead, string>>;

const requestTimes = new Map<string, number[]>();

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function formatContactLeadMessage(lead: NormalizedLead) {
  const bill = lead.monthlyBill ? `Rs. ${lead.monthlyBill}` : "Not provided";
  const notes = lead.message || "Not provided";

  return [
    "<b>New Contact / Site Visit Lead</b>",
    "",
    `<b>Name:</b> ${escapeHtml(lead.name)}`,
    `<b>Phone:</b> ${escapeHtml(lead.phone)}`,
    `<b>WhatsApp:</b> ${escapeHtml(lead.whatsappNumber || "Same/not provided")}`,
    `<b>Email:</b> ${escapeHtml(lead.email)}`,
    `<b>City:</b> ${escapeHtml(lead.city)}`,
    `<b>Roof Type:</b> ${escapeHtml(lead.roofType)}`,
    `<b>Electricity Bill:</b> ${escapeHtml(bill)}`,
    "",
    `<b>Message:</b> ${escapeHtml(notes)}`,
  ].join("\n");
}

function formatLeadMessage(lead: NormalizedLead) {
  if (lead.leadType === "contact") {
    return formatContactLeadMessage(lead);
  }

  const notes = lead.message || "Not provided";

  return [
    "<b>New Solar Quote Lead</b>",
    "",
    `<b>Name:</b> ${escapeHtml(lead.name)}`,
    `<b>Phone:</b> ${escapeHtml(lead.phone)}`,
    `<b>WhatsApp:</b> ${escapeHtml(lead.whatsappNumber || "Same/not provided")}`,
    `<b>Email:</b> ${escapeHtml(lead.email)}`,
    `<b>City:</b> ${escapeHtml(lead.city)}`,
    `<b>State:</b> ${escapeHtml(lead.state)}`,
    `<b>Customer Type:</b> ${escapeHtml(lead.customerType)}`,
    `<b>Interested In:</b> ${escapeHtml(lead.interestedIn)}`,
    `<b>Service:</b> ${escapeHtml(lead.service)}`,
    `<b>Roof Type:</b> ${escapeHtml(lead.roofType)}`,
    `<b>Roof Area:</b> ${escapeHtml(lead.roofArea || "Not provided")}`,
    `<b>Monthly Bill:</b> Rs. ${escapeHtml(lead.monthlyBill)}`,
    `<b>Bill Upload:</b> ${escapeHtml(lead.billFileName || "No file selected")}`,
    `<b>Upload Note:</b> ${escapeHtml(lead.billFileNote || "No upload metadata")}`,
    `<b>Calculator Source:</b> ${escapeHtml(lead.calculatorSource || "Not provided")}`,
    "",
    `<b>Project Notes:</b> ${escapeHtml(notes)}`,
    lead.leadSource === "calculator" ? `<b>Calculator inputs:</b> ${escapeHtml(lead.calculatorInputs)}` : "",
    lead.leadSource === "calculator" ? `<b>Calculator outputs:</b> ${escapeHtml(lead.calculatorOutputs)}` : "",
    lead.leadSource === "calculator" ? `<b>UTM:</b> ${escapeHtml(lead.utm)}` : "",
  ].join("\n");
}

export async function POST(request: Request) {
  let payload: QuoteLead;

  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const recent = (requestTimes.get(forwarded) ?? []).filter((time) => now - time < 60_000);
  if (recent.length >= 5) return NextResponse.json({ message: "Please wait a minute before trying again." }, { status: 429 });
  recent.push(now);
  requestTimes.set(forwarded, recent);

  try {
    payload = (await request.json()) as QuoteLead;
  } catch {
    return NextResponse.json({ message: "Invalid quote request." }, { status: 400 });
  }

  if (text(payload.website)) return NextResponse.json({ message: "Quote request received." });

  const leadSource = text(payload.leadSource);
  const lead = {
    leadType: text(payload.leadType),
    name: text(payload.name),
    email: text(payload.email),
    phone: text(payload.phone),
    whatsappNumber: text(payload.whatsappNumber),
    city: text(payload.city),
    customerType: text(payload.customerType),
    service: text(payload.service),
    interestedIn: text(payload.interestedIn),
    state: text(payload.state),
    roofType: text(payload.roofType),
    monthlyBill: text(payload.monthlyBill),
    roofArea: text(payload.roofArea),
    billFileName: text(payload.billFileName),
    billFileNote: text(payload.billFileNote),
    calculatorSource: text(payload.calculatorSource),
    message: text(payload.message),
    website: text(payload.website),
    leadSource,
    calculatorInputs: JSON.stringify(payload.calculatorInputs ?? {}),
    calculatorOutputs: JSON.stringify(payload.calculatorOutputs ?? {}),
    utm: JSON.stringify(payload.utm ?? {}),
  };

  if (lead.leadType === "contact") {
    if (!lead.name || !lead.email.includes("@") || lead.phone.length < 8 || !lead.city || lead.message.length < 10) {
      return NextResponse.json(
        { message: "Please complete all fields with valid details." },
        { status: 400 },
      );
    }
  } else if (leadSource === "calculator") {
    if (!lead.name || lead.phone.replace(/\D/g, "").length < 10) {
      return NextResponse.json({ message: "Please provide a valid name and 10-digit phone number." }, { status: 400 });
    }
  } else {
    const bill = Number(lead.monthlyBill);

    if (!lead.name || !lead.email.includes("@") || lead.phone.replace(/\D/g, "").length < 10 || !lead.city || !bill || bill < 100) {
      return NextResponse.json(
        { message: "Please add valid contact details, city, and monthly bill." },
        { status: 400 },
      );
    }
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();
  if (!botToken || !chatId) {
    return NextResponse.json({ message: "Lead delivery is not configured yet. Please contact us on WhatsApp." }, { status: 503 });
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
    console.error("Telegram lead alert request failed", error);
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

    console.error("Telegram lead alert failed", {
      status: telegramResponse.status,
      reason,
    });

    return NextResponse.json(
      { message: `Could not send Telegram lead alert: ${reason}` },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: lead.leadType === "contact" ? "Contact request sent." : "Quote request sent." });
}
