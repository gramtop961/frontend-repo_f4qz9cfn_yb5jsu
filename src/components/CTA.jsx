import React from 'react';

function CTA() {
  return (
    <section id="become-vendor" className="py-20 bg-gradient-to-br from-indigo-700 via-indigo-600 to-indigo-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(800px_400px_at_0%_0%,rgba(255,255,255,0.35),transparent),radial-gradient(600px_300px_at_100%_0%,rgba(255,255,255,0.25),transparent)]" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Sell with us</h2>
            <p className="mt-3 text-indigo-100 text-lg">Reach new customers, manage orders in one dashboard, and get paid securely. No monthly fees — just a small commission per sale.</p>
            <ul className="mt-6 space-y-3 text-indigo-100/90">
              <li>• Zero setup costs</li>
              <li>• Built‑in payments & shipping labels</li>
              <li>• Powerful analytics</li>
            </ul>
            <div className="mt-8 flex gap-3">
              <a href="#" className="px-5 py-3 rounded-xl bg-white text-indigo-700 font-semibold shadow hover:translate-y-[-1px] hover:shadow-lg transition">Open your shop</a>
              <a href="#" className="px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/15 transition">Book a demo</a>
            </div>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur shadow-2xl">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-white text-slate-800 p-4">
                <p className="text-sm text-slate-500">Avg. vendor sales in 90 days</p>
                <p className="mt-2 text-2xl font-bold">$12,450</p>
              </div>
              <div className="rounded-xl bg-white text-slate-800 p-4">
                <p className="text-sm text-slate-500">Vendors onboarded</p>
                <p className="mt-2 text-2xl font-bold">1,240+</p>
              </div>
              <div className="rounded-xl bg-white text-slate-800 p-4">
                <p className="text-sm text-slate-500">Avg. rating</p>
                <p className="mt-2 text-2xl font-bold">4.8/5</p>
              </div>
              <div className="rounded-xl bg-white text-slate-800 p-4">
                <p className="text-sm text-slate-500">Categories</p>
                <p className="mt-2 text-2xl font-bold">25+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
