import React from 'react';

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-600 via-indigo-600/90 to-indigo-700 text-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(800px_400px_at_0%_0%,rgba(255,255,255,0.35),transparent),radial-gradient(600px_300px_at_100%_0%,rgba(255,255,255,0.25),transparent)]" />
      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-medium bg-white/10 rounded-full px-3 py-1 backdrop-blur border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Multi‑Vendor Marketplace
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Discover products from independent vendors in one place
            </h1>
            <p className="mt-4 text-white/80 text-lg">
              Shop unique items, support small businesses, and enjoy a seamless checkout across multiple stores.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#products" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-indigo-700 font-semibold shadow hover:translate-y-[-1px] hover:shadow-lg transition">
                Shop Trending
              </a>
              <a href="#become-vendor" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-500/30 text-white font-semibold border border-white/20 hover:bg-indigo-500/40 transition">
                Become a Vendor
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-white/80">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/40?img=${i+10}`} alt="buyer" className="w-8 h-8 rounded-full ring-2 ring-white/70" />
                ))}
              </div>
              <p>Trusted by 10k+ shoppers & 1k+ vendors</p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1512446816042-444d641267ee?q=80&w=1400&auto=format&fit=crop"
                alt="Marketplace showcase"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white text-slate-800 rounded-xl p-4 shadow-xl border border-slate-200 hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-700 grid place-items-center font-bold">★</div>
              <div>
                <p className="text-sm font-semibold">4.9/5 average rating</p>
                <p className="text-xs text-slate-500">Across 20k+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
