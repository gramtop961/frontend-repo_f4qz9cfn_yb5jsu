import React from 'react';

const vendors = [
  { id: 1, name: 'Clay & Co.', img: 'https://images.unsplash.com/photo-1514512364185-4c2b4e9dffc3?q=80&w=1200&auto=format&fit=crop', category: 'Home & Living', rating: 4.9 },
  { id: 2, name: 'Nordic Lights', img: 'https://images.unsplash.com/photo-1503457574464-1a4bfb941b96?q=80&w=1200&auto=format&fit=crop', category: 'Lighting', rating: 4.8 },
  { id: 3, name: 'Papertrail', img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop', category: 'Stationery', rating: 4.7 },
  { id: 4, name: 'GreenEdge', img: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=1200&auto=format&fit=crop', category: 'Garden', rating: 4.8 },
];

function Vendors() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Featured vendors</h2>
            <p className="text-slate-600 mt-2">Meet the independent brands powering our marketplace</p>
          </div>
          <a href="#become-vendor" className="text-indigo-600 font-semibold hover:text-indigo-700">Become a vendor</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vendors.map(v => (
            <div key={v.id} className="rounded-2xl overflow-hidden border border-slate-200 group hover:shadow-xl transition">
              <div className="aspect-video overflow-hidden">
                <img src={v.img} alt={v.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900">{v.name}</h3>
                  <span className="text-sm px-2 py-1 rounded bg-amber-100 text-amber-700">★ {v.rating}</span>
                </div>
                <p className="text-sm text-slate-500 mt-1">{v.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Vendors;
