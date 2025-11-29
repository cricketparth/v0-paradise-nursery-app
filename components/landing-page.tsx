"use client"

import Link from "next/link"

export function LandingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Background */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=1080&width=1920&query=lush green indoor plants in natural sunlight)",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Paradise Nursery</h1>
          <p className="text-lg md:text-xl mb-8 text-balance leading-relaxed">
            Welcome to Paradise Nursery, your one-stop destination for beautiful, healthy houseplants. We carefully
            curate a selection of the finest indoor plants to bring nature into your home. Whether you're a seasoned
            plant parent or just beginning your green journey, we have the perfect plants to transform your space into a
            lush oasis.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition text-lg"
          >
            Get Started
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}
