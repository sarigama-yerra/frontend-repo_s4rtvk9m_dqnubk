import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Let’s Work Together</h2>
        <p className="mt-2 text-white/70">Tell us what you need and we’ll get back within 24 hours.</p>

        <form className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="mb-2 block text-sm text-white/80">Name</label>
            <input type="text" className="w-full rounded-xl bg-[#121212] px-4 py-3 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-[#FFD300]" placeholder="Your name" />
          </div>
          <div className="sm:col-span-1">
            <label className="mb-2 block text-sm text-white/80">Phone</label>
            <input type="tel" className="w-full rounded-xl bg-[#121212] px-4 py-3 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-[#FFD300]" placeholder="(555) 123-4567" />
          </div>
          <div className="sm:col-span-1">
            <label className="mb-2 block text-sm text-white/80">Email</label>
            <input type="email" className="w-full rounded-xl bg-[#121212] px-4 py-3 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-[#FFD300]" placeholder="you@email.com" />
          </div>
          <div className="sm:col-span-1">
            <label className="mb-2 block text-sm text-white/80">Service requested</label>
            <select className="w-full rounded-xl bg-[#121212] px-4 py-3 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-[#FFD300]">
              <option>Event magnet photography</option>
              <option>Social media videos</option>
              <option>Video editing</option>
              <option>Still photography</option>
              <option>Graphic design</option>
              <option>Content for small businesses</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="mb-2 block text-sm text-white/80">Message</label>
            <textarea rows="5" className="w-full rounded-xl bg-[#121212] px-4 py-3 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-[#FFD300]" placeholder="Tell us about your project" />
          </div>
          <div className="sm:col-span-2">
            <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-[#FF0000] to-[#FFD300] px-6 py-3 font-semibold text-black shadow-[0_8px_30px_rgba(255,0,0,0.35)]">
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* glow accents */}
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,#FFD300,transparent_60%)] blur-3xl opacity-70" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,#FF0000,transparent_60%)] blur-3xl opacity-70" />
    </section>
  )
}
