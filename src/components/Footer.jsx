import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-sm text-white/70">© {new Date().getFullYear()} Youth Creative Studio</p>
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-[#FF0000]" />
            <span className="inline-block h-2 w-2 rounded-full bg-[#FFD300]" />
          </div>
        </div>
      </div>
    </footer>
  )
}
