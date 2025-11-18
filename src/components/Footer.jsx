import React from 'react';

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold">MarketHub</h3>
            <p className="mt-2 text-sm text-slate-400">A modern multi‑vendor marketplace bringing unique products together.</p>
          </div>
          <div>
            <h4 className="font-semibold">Shop</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white">Home & Living</a></li>
              <li><a href="#" className="hover:text-white">Fashion</a></li>
              <li><a href="#" className="hover:text-white">Electronics</a></li>
              <li><a href="#" className="hover:text-white">Art</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Vendors</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li><a href="#become-vendor" className="hover:text-white">Become a vendor</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Seller Academy</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} MarketHub. All rights reserved.</p>
          <div className="flex gap-4 mt-3 sm:mt-0">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
