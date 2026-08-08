"use client";

import { useState } from "react";
import { customerTypes, enquiryInterests, roofTypes, services, serviceStates } from "@/lib/constants";

const initial = {
  name: "",
  email: "",
  phone: "",
  whatsappNumber: "",
  city: "",
  customerType: customerTypes[0],
  interestedIn: enquiryInterests[0],
  service: services[0].title,
  state: serviceStates[0],
  roofType: roofTypes[0],
  monthlyBill: "",
  roofArea: "",
  message: "",
  calculatorSource: "",
};

export function QuoteForm() {
  const [form, setForm] = useState(() => {
    if (typeof window === "undefined") return initial;
    const params = new URLSearchParams(window.location.search);
    return {
      ...initial,
      monthlyBill: params.get("monthlyBill") || initial.monthlyBill,
      customerType: params.get("customerType") || initial.customerType,
      roofType: params.get("roofType") || initial.roofType,
      city: params.get("city") || initial.city,
      message: params.get("message") || initial.message,
      calculatorSource: params.get("source") || initial.calculatorSource,
    };
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [billFile, setBillFile] = useState<File | null>(null);

  function validateFile(file: File) {
    const allowed = ["application/pdf", "image/jpeg", "image/png"];
    if (!allowed.includes(file.type)) return "Upload a PDF, JPG, JPEG, or PNG electricity bill.";
    if (file.size > 5 * 1024 * 1024) return "Electricity bill file must be 5 MB or smaller.";
    return "";
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const bill = Number(form.monthlyBill);
    if (!form.name || !form.email.includes("@") || form.phone.replace(/\D/g, "").length < 10 || !form.city || !bill || bill < 100) {
      setStatus("Please add valid name, email, 10-digit mobile number, city, and monthly bill.");
      return;
    }
    if (billFile) {
      const fileError = validateFile(billFile);
      if (fileError) {
        setStatus(fileError);
        return;
      }
    }
    setIsSubmitting(true);
    setStatus("Sending quote request...");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          billFileName: billFile?.name || "",
          billFileNote: billFile ? "Frontend validated file selected. Configure backend storage endpoint before accepting uploads." : "",
        }),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus(result.message ?? "Could not send quote request. Please try again.");
        return;
      }

      setStatus("Quote request sent. Our team will contact you soon.");
      setForm(initial);
      setBillFile(null);
    } catch {
      setStatus("Could not send quote request. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={submit} className="grid gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="field-label">Full Name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="field-input" /></label>
        <label className="field-label">Email<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="field-input" /></label>
        <label className="field-label">Mobile Number<input required type="tel" inputMode="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="field-input" /></label>
        <label className="field-label">WhatsApp Number (optional if same)<input type="tel" inputMode="tel" value={form.whatsappNumber} onChange={(e) => setForm({ ...form, whatsappNumber: e.target.value })} className="field-input" /></label>
        <label className="field-label">City / Village<input required value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="field-input" /></label>
        <label className="field-label">Customer Type<select value={form.customerType} onChange={(e) => setForm({ ...form, customerType: e.target.value })} className="field-input">{customerTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
        <label className="field-label">Average Monthly Electricity Bill<input required min={100} type="number" value={form.monthlyBill} onChange={(e) => setForm({ ...form, monthlyBill: e.target.value })} className="field-input" /></label>
        <label className="field-label">Roof Type<select value={form.roofType} onChange={(e) => setForm({ ...form, roofType: e.target.value })} className="field-input">{roofTypes.map((roof) => <option key={roof}>{roof}</option>)}</select></label>
        <label className="field-label">Approx. Available Roof Area (optional)<input type="text" value={form.roofArea} onChange={(e) => setForm({ ...form, roofArea: e.target.value })} className="field-input" placeholder="Example: 800 sq.ft." /></label>
        <label className="field-label">Interested In<select value={form.interestedIn} onChange={(e) => setForm({ ...form, interestedIn: e.target.value, service: e.target.value })} className="field-input">{enquiryInterests.map((interest) => <option key={interest}>{interest}</option>)}</select></label>
        <label className="field-label">State<select value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })} className="field-input">{serviceStates.map((state) => <option key={state}>{state}</option>)}</select></label>
      </div>
      <label className="field-label">Message<textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="field-input resize-none" /></label>
      <div className="grid gap-2">
        <label className="field-label">
          Optional Electricity Bill Upload
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
            onChange={(e) => {
              const file = e.target.files?.[0] ?? null;
              if (file) {
                const fileError = validateFile(file);
                if (fileError) {
                  setStatus(fileError);
                  e.target.value = "";
                  setBillFile(null);
                  return;
                }
              }
              setStatus("");
              setBillFile(file);
            }}
            className="field-input"
          />
        </label>
        {billFile ? (
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm dark:border-white/10 dark:bg-white/[0.04]">
            <span className="font-semibold text-slate-700 dark:text-slate-200">{billFile.name}</span>
            <button type="button" onClick={() => setBillFile(null)} className="font-bold text-sun-blue">Remove</button>
          </div>
        ) : null}
        <p className="text-xs text-slate-500 dark:text-slate-400">Upload UI is ready. Backend storage is not enabled yet, so the current API receives only validated file metadata.</p>
      </div>
      {form.calculatorSource ? <p className="rounded-lg bg-blue-50 p-3 text-sm font-semibold text-sun-blue dark:bg-blue-400/10">Calculator result attached from {form.calculatorSource}.</p> : null}
      <button type="submit" disabled={isSubmitting} className="rounded-full bg-sun-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400">{isSubmitting ? "Sending..." : "Get My Free Solar Estimate"}</button>
      {status ? <p role="status" className="text-sm text-sun-blue">{status}</p> : null}
    </form>
  );
}
