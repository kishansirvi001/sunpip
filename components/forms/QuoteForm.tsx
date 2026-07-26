"use client";

import { useState } from "react";
import { roofTypes, services, serviceStates } from "@/lib/constants";

const initial = {
  name: "",
  email: "",
  phone: "",
  city: "",
  service: services[0].title,
  state: serviceStates[0],
  roofType: roofTypes[0],
  monthlyBill: "",
  message: "",
};

export function QuoteForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("");

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const bill = Number(form.monthlyBill);
    if (!form.name || !form.email.includes("@") || form.phone.length < 8 || !form.city || !bill || bill < 500) {
      setStatus("Please add valid contact details, city, and monthly bill.");
      return;
    }
    setStatus("Quote request validated and ready for backend integration.");
    setForm(initial);
  }

  return (
    <form onSubmit={submit} className="grid gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="field-label">Name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="field-input" /></label>
        <label className="field-label">Email<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="field-input" /></label>
        <label className="field-label">Phone<input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="field-input" /></label>
        <label className="field-label">City<input required value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="field-input" /></label>
        <label className="field-label">Monthly bill<input required min={500} type="number" value={form.monthlyBill} onChange={(e) => setForm({ ...form, monthlyBill: e.target.value })} className="field-input" /></label>
        <label className="field-label">Service<select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="field-input">{services.map((service) => <option key={service.slug}>{service.title}</option>)}</select></label>
        <label className="field-label">State<select value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })} className="field-input">{serviceStates.map((state) => <option key={state}>{state}</option>)}</select></label>
      </div>
      <label className="field-label">Roof type<select value={form.roofType} onChange={(e) => setForm({ ...form, roofType: e.target.value })} className="field-input">{roofTypes.map((roof) => <option key={roof}>{roof}</option>)}</select></label>
      <label className="field-label">Project notes<textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="field-input resize-none" /></label>
      <button type="submit" className="rounded-full bg-sun-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">Request quote</button>
      {status ? <p role="status" className="text-sm text-sun-blue">{status}</p> : null}
    </form>
  );
}
