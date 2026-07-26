"use client";

import { useEffect, useState } from "react";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShow(window.localStorage.getItem("cookie-consent") !== "accepted");
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-lg border border-slate-200 bg-white p-4 shadow-soft dark:border-white/10 dark:bg-slate-900">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
          We use essential cookies and privacy-friendly analytics to improve site performance and enquiries.
        </p>
        <button
          type="button"
          onClick={() => {
            window.localStorage.setItem("cookie-consent", "accepted");
            setShow(false);
          }}
          className="rounded-full bg-sun-blue px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
