import React from 'react';

const points = [
  { title: 'Unified checkout', desc: 'Buy from multiple vendors with one secure payment.' },
  { title: 'Buyer protection', desc: 'Refunds and dispute resolution on every order.' },
  { title: 'Authentic products', desc: 'Verified sellers and quality checks to reduce fakes.' },
  { title: 'Fair fees', desc: 'We keep commissions low so sellers can price better.' },
];

function WhyChooseUs() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Why choose us</h2>
          <p className="mt-3 text-slate-600">Built for trust, ease, and value across buyers and sellers.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p, i) => (
            <div key={i} className="rounded-2xl bg-white border border-slate-200 p-6 hover:shadow-xl transition">
              <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-700 grid place-items-center font-bold">{i+1}</div>
              <h3 className="mt-4 font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-1 text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
