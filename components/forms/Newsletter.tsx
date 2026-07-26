"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.includes("@")) {
      setStatus("Enter a valid email.");
      return;
    }
    setStatus("Subscribed.");
    setEmail("");
  }

  return (
    <form onSubmit={submit} className="mt-4 flex flex-col gap-3">
      <label className="sr-only" htmlFor="newsletter-email">Email address</label>
      <input id="newsletter-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" className="rounded-md border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sun-blue" />
      <button type="submit" className="rounded-full bg-sun-blue px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-sun-blue focus:ring-offset-2 focus:ring-offset-slate-950">Subscribe</button>
      {status ? <p role="status" className="text-sm text-slate-300">{status}</p> : null}
    </form>
  );
}
