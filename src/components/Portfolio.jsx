import React from 'react'

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Portfolio</h2>
          <a href="#" className="rounded-full bg-gradient-to-r from-[#FF0000] to-[#FFD300] px-5 py-2.5 text-sm font-semibold text-black shadow-[0_8px_30px_rgba(255,0,0,0.35)]">View Our Portfolio</a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl bg-[#131313] aspect-[4/3] ring-1 ring-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_50%,rgba(255,211,0,0.15),transparent_60%)]" />
              <div className="absolute inset-0 flex items-center justify-center text-white/60 text-sm">Sample {i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
