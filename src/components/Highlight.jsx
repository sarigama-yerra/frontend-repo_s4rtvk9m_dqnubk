import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Highlight() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              New Feature Coming Soon — <span className="text-[#FFD300]">Time Capsule</span>
            </h3>
            <p className="mt-5 text-white/80">
              Capture moments and preserve them in a futuristic, interactive timeline. Bold, immersive, unforgettable.
            </p>
          </div>
          <div className="relative h-[360px] w-full">
            <div className="absolute inset-0">
              <Spline scene="https://prod.spline.design/52ejzyYmcktu6MKy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10 bg-gradient-to-tr from-[#FF0000]/30 to-[#FFD300]/20 mix-blend-screen" />
          </div>
        </div>
      </div>

      {/* Large glowing sphere accent */}
      <div className="pointer-events-none absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_30%_30%,#FF0000,rgba(255,0,0,0.2)_60%,transparent_70%)] blur-3xl opacity-70" />
    </section>
  )
}
