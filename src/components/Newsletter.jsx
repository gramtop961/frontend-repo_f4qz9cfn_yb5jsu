import React from 'react';

function Newsletter() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Get fresh drops in your inbox</h2>
        <p className="mt-2 text-slate-600">Be first to know about new vendors, limited runs, and seasonal sales.</p>

        <form className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <input type="email" required placeholder="Enter your email" className="w-full sm:w-96 px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <button className="px-5 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700">Subscribe</button>
        </form>
        <p className="mt-3 text-xs text-slate-500">By subscribing you agree to receive marketing emails.</p>
      </div>
    </section>
  );
}

export default Newsletter;
