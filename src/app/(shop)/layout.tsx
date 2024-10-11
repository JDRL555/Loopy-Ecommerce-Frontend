import React from "react";

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="text-center text-2xl">
      { children }
    </main>
  )
}
