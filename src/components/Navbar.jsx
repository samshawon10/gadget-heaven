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

  return (
    <div className="relative ">
      <div className="bg-purple-700  text-white rounded-b-[32px] relative z-10 border-0 shadow-none">
        {/* Navbar */}
        <nav className=" px-6 py-4 flex items-center justify-between">
          <div className="text-lg font-bold">Gadget Heaven</div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 font-medium">
            <li className="hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline">
              <Link to="/statistics">Statistics</Link>
            </li>
            <li className="hover:underline">
              <Link to="/dashboard/cart">Dashboard</Link>
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

        {location.pathname === '/' &&  <Banner  data={currentBanner} />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-20 right-4 mt-2 w-40 bg-white text-purple-700 rounded-lg shadow-md p-4 space-y-2 font-medium md:hidden z-50">
          <li>
            <Link to="/" onClick={handleCloseMenu} className="hover:text-purple-900 block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/statistics" onClick={handleCloseMenu} className="hover:text-purple-900 block">
              Statistics
            </Link>
          </li>
          <li>
            <Link to="/dashboard/cart" onClick={handleCloseMenu} className="hover:text-purple-900 block">
              Dashboard
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
