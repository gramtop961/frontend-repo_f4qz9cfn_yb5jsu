import React, { useEffect, useState } from 'react';

const mockProducts = [
  { id: 1, title: 'Handcrafted Mug', price: 24.99, image: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=1200&auto=format&fit=crop', vendor: 'Clay & Co.' },
  { id: 2, title: 'Minimal Desk Lamp', price: 59.00, image: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?q=80&w=1200&auto=format&fit=crop', vendor: 'Nordic Lights' },
  { id: 3, title: 'Leather Journal', price: 32.50, image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop', vendor: 'Papertrail' },
  { id: 4, title: 'Concrete Planter', price: 18.75, image: 'https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?q=80&w=1200&auto=format&fit=crop', vendor: 'GreenEdge' },
  { id: 5, title: 'Organic Cotton Tote', price: 15.00, image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop', vendor: 'EcoCarry' },
  { id: 6, title: 'Aroma Soy Candle', price: 22.00, image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop', vendor: 'Calm & Glow' }
];

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Placeholder for backend fetch. Using mock data for the homepage showcase.
    setProducts(mockProducts);
  }, []);

  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Trending products</h2>
            <p className="text-slate-600 mt-2">Curated from top vendors across categories</p>
          </div>
          <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700">View all</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition">
              <div className="aspect-square overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5">
                <p className="text-sm text-slate-500">{p.vendor}</p>
                <h3 className="mt-1 font-semibold text-slate-900">{p.title}</h3>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-indigo-600">${p.price.toFixed(2)}</span>
                  <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700">Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
