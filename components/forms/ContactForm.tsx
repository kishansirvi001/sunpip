"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  city: string;
  electricityBill: string;
  roofType: string;
  message: string;
};

const initialState: FormState = { name: "", email: "", phone: "", city: "", electricityBill: "", roofType: "RCC roof", message: "" };

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.name || !form.email.includes("@") || form.phone.length < 8 || !form.city || form.message.length < 10) {
      setStatus("Please complete all fields with valid details.");
      return;
    }
    setIsSubmitting(true);
    setStatus("Sending enquiry...");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadType: "contact",
          ...form,
          monthlyBill: form.electricityBill,
          service: "Book site visit",
        }),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus(result.message ?? "Could not send enquiry. Please try again.");
        return;
      }

      setStatus("Enquiry sent. Our team will contact you soon.");
      setForm(initialState);
    } catch {
      setStatus("Could not send enquiry. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={submit} className="grid gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="field-label">Name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="field-input" /></label>
        <label className="field-label">Email<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="field-input" /></label>
        <label className="field-label">Phone<input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="field-input" /></label>
        <label className="field-label">City<input required value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="field-input" /></label>
        <label className="field-label">Electricity bill<input type="number" value={form.electricityBill} onChange={(e) => setForm({ ...form, electricityBill: e.target.value })} className="field-input" /></label>
        <label className="field-label">Roof type<select value={form.roofType} onChange={(e) => setForm({ ...form, roofType: e.target.value })} className="field-input"><option>RCC roof</option><option>Metal shed</option><option>Tile roof</option><option>Ground mount</option></select></label>
      </div>
      <label className="field-label">Message<textarea required minLength={10} rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="field-input resize-none" /></label>
      <button type="submit" disabled={isSubmitting} className="inline-flex items-center justify-center gap-2 rounded-full bg-sun-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400">
        {isSubmitting ? "Sending..." : "Send enquiry"} <Send aria-hidden="true" className="h-4 w-4" />
      </button>
      {status ? <p role="status" className="text-sm text-sun-blue">{status}</p> : null}
    </form>
  );
}
