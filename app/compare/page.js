import React from "react";

export default function page() {
  return (
    <section className="py-5">
      <h2 className="text-xl font-semibold">Compare specs</h2>
      <div className="mt-5 flex gap-4">
        <div className="w-1/2">
          <input className="px-2.5 py-1 outline-none border border-blue-600 rounded w-full" placeholder="Search" />
        </div>
        <div className="w-1/2">
          <input className="px-2.5 py-1 outline-none border border-blue-600 rounded w-full" placeholder="Search" />
        </div>
      </div>
    </section>
  );
}
