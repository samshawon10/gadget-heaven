import { Link, useLocation } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { HiMenu } from 'react-icons/hi';
import { useState } from 'react';
import Banner from './Banner';
import BannerImage from '../assets/banner.jpg';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const bannerData = {
    '/': {
      title: "Upgrade Your Tech Accessorize with Gadget Heaven Accessories",
      subtitle:
        "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!",
      image: BannerImage,
    },
  };

  const currentBanner = bannerData[location.pathname] || bannerData['/'];

  const handleCloseMenu = () => setMenuOpen(false);

  const isActive = (path) => location.pathname === path;

  return (
    <div className="relative">
      <div className="bg-purple-700 text-white rounded-b-[32px] relative z-10 border-0 shadow-none">
        {/* Navbar */}
        <nav className="px-6 py-4 flex items-center justify-between">
          <div className="text-lg font-bold">Gadget Heaven</div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 font-medium">
            <li>
              <Link
                to="/"
                className={`hover:underline ${isActive('/') ? 'text-yellow-400 font-semibold underline' : ''}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/statistics"
                className={`hover:underline ${isActive('/statistics') ? 'text-yellow-400 font-semibold underline' : ''}`}
              >
                Statistics
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/cart"
                className={`hover:underline ${isActive('/dashboard/cart') ? 'text-yellow-400 font-semibold underline' : ''}`}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/support"
                className={`hover:underline ${isActive('/support') ? 'text-yellow-400 font-semibold underline' : ''}`}
              >
                Support
              </Link>
            </li>
          </ul>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/dashboard/cart" className="p-2 hover:bg-purple-500 rounded-full">
              <FaCartShopping />
            </Link>
            <Link to="/dashboard/wishlist" className="p-2 hover:bg-purple-500 rounded-full">
              <FaHeart />
            </Link>
            <button
              className="md:hidden p-2 hover:bg-purple-500 rounded-full"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <HiMenu size={22} />
            </button>
          </div>
        </nav>

        {/* Banner (only on Home) */}
        {location.pathname === '/' && <Banner data={currentBanner} />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-20 right-4 mt-2 w-40 bg-white text-purple-700 rounded-lg shadow-md p-4 space-y-2 font-medium md:hidden z-50">
          <li>
            <Link
              to="/"
              onClick={handleCloseMenu}
              className={`block hover:text-purple-900 ${isActive('/') ? 'text-yellow-500 font-semibold' : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/statistics"
              onClick={handleCloseMenu}
              className={`block hover:text-purple-900 ${isActive('/statistics') ? 'text-yellow-500 font-semibold' : ''}`}
            >
              Statistics
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/cart"
              onClick={handleCloseMenu}
              className={`block hover:text-purple-900 ${isActive('/dashboard/cart') ? 'text-yellow-500 font-semibold' : ''}`}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/support"
              onClick={handleCloseMenu}
              className={`block hover:text-purple-900 ${isActive('/support') ? 'text-yellow-500 font-semibold' : ''}`}
            >
              Support
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
