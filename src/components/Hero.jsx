import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Spline 3D cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/52ejzyYmcktu6MKy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Red/Yellow gradient overlay for brand tone */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_20%_10%,rgba(255,0,0,0.55),transparent_60%),radial-gradient(100%_120%_at_80%_90%,rgba(255,213,0,0.45),transparent_55%)] mix-blend-screen" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-6xl items-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-[0_6px_30px_rgba(255,0,0,0.35)]">
            The Next Generation of Creativity
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-white/90">
            Photography • Video Editing • Graphic Design • Social Media Content
          </p>
          <div className="mt-8">
            <a href="#contact" className="inline-flex items-center rounded-full bg-gradient-to-r from-[#FF0000] to-[#FFD300] px-7 py-3 text-base sm:text-lg font-semibold text-black shadow-[0_8px_30px_rgba(255,0,0,0.35)] transition-transform hover:scale-[1.03]">
              Let’s Talk
            </a>
          </div>
        </div>
      </div>

      {/* subtle top/bottom fades for readability */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
    </section>
  )
}
