import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-slate-700 text-white text-center text-3xl p-5">
      { children }
    </main>
  )
}
