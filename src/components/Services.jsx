import React from 'react'
import { Camera, Video, Scissors, Image as ImageIcon, PenTool, Store } from 'lucide-react'

const services = [
  { icon: Camera, title: 'Event magnet photography' },
  { icon: Video, title: 'Social media videos' },
  { icon: Scissors, title: 'Video editing' },
  { icon: ImageIcon, title: 'Still photography' },
  { icon: PenTool, title: 'Graphic design' },
  { icon: Store, title: 'Content for small businesses' },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-black">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Our Services</h2>
          <p className="mt-3 text-white/70">Everything you need to stand out — aligned to your brand, built for today’s platforms.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#240000] to-[#3b0000] p-6 ring-1 ring-white/10 transition-transform hover:scale-[1.02]">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_30%_30%,#FF0000,transparent_60%)] opacity-50 blur-xl" />
              <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_30%_30%,#FFD300,transparent_60%)] opacity-50 blur-xl" />
              <div className="relative z-10 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF0000] to-[#FFD300] text-black shadow-[0_10px_30px_rgba(255,0,0,0.35)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
