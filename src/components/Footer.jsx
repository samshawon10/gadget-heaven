import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-12 border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white">Gadget Heaven</h2>
        <p className="text-center text-sm text-white mt-2 max-w-2xl mx-auto">
          Leading the way in cutting-edge technology and innovation.
        </p>

        <hr className="my-8 border-gray-300" />
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-white">
          <div>
            <h3 className="font-semibold text-white mb-2">Services</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Product Support</a></li>
              <li><a href="#" className="hover:underline">Order Tracking</a></li>
              <li><a href="#" className="hover:underline">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:underline">Returns</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">Company</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">Legal</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 text-center text-white">
          <p className="text-sm">&copy; 2025 Gadget Heaven. All rights reserved.</p>
          <p className="text-sm mt-4 md:mt-0 italic text-center text-pink-200">Crafted with ❤️ by <span className="font-bold text-white">Sam Shawon</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
