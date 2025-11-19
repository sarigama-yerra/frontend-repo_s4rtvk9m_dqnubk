import React from 'react'

export default function About() {
  return (
    <section id="about" className="relative bg-[#B80000] text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">About Us</h2>
            <p className="mt-5 text-white/90 leading-relaxed">
              We’re a youth-led creative studio powered by talented teenagers bringing a bold, modern perspective to every project. Our team blends professional skills with fearless experimentation to deliver visuals that feel fresh, unique, and undeniably high-quality.
            </p>
          </div>
          <div className="md:col-span-1">
            <div className="rounded-2xl border border-white/15 bg-gradient-to-br from-[#FFD300]/20 to-transparent p-5 shadow-[0_10px_40px_rgba(255,211,0,0.25)]">
              <p className="text-sm text-white/90">
                Built for brands that want energy, clarity, and a futuristic edge. We create fast, think smart, and design with purpose.
              </p>
            </div>
          </div>
        </div>

        {/* Accent boxes */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            'Teenage-led and proud',
            'Professional-grade delivery',
            'Fresh, unique aesthetics',
            'High-quality, reliable output',
          ].map((item) => (
            <div key={item} className="rounded-xl bg-[#8A0000] p-5 ring-1 ring-white/10">
              <p className="text-yellow-300 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* optional small glowing sphere */}
      <div className="pointer-events-none absolute -right-24 top-10 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_30%_30%,#FFD300,rgba(255,211,0,0.2)_60%,transparent_70%)] blur-2xl opacity-70" />
    </section>
  )
}
