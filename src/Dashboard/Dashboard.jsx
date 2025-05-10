import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';

const Dashboard = () => {


  useEffect(() => {
    document.title = 'Gadget Heaven | Dashboard'; 
  }, []);

  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [sortOption, setSortOption] = useState('default');
  const [showModal, setShowModal] = useState(false);
  const [finalCost, setFinalCost] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();

  const activeTab = location.pathname.includes('wishlist') ? 'wishlist' : 'cart';

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const wishlist = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    setCartItems(cart);
    setWishlistItems(wishlist);
  }, []);

  useEffect(() => {
    const navbar = document.querySelector('nav');
    if (navbar) navbar.classList.add('bg-white', 'text-black');
    return () => navbar?.classList.remove('bg-white', 'text-black');
  }, []);

  const handleRemove = (id) => {
    if (activeTab === 'cart') {
      const updated = cartItems.filter(item => item.product_id !== id);
      setCartItems(updated);
      localStorage.setItem('cartItems', JSON.stringify(updated));
    } else {
      const updated = wishlistItems.filter(item => item.product_id !== id);
      setWishlistItems(updated);
      localStorage.setItem('wishlistItems', JSON.stringify(updated));
    }
  };

  const handlePurchase = () => {
    if (cartItems.length > 0) {
      const total = cartItems.reduce((sum, item) => sum + item.price, 0);
      setFinalCost(total);
      setShowModal(true);
      setCartItems([]);
      localStorage.setItem('cartItems', JSON.stringify([]));
    }
  };

  const totalCost = cartItems.reduce((sum, item) => sum + item.price, 0);
  let products = activeTab === 'cart' ? [...cartItems] : [...wishlistItems];
  if (sortOption === 'low') products.sort((a, b) => a.price - b.price);
  else if (sortOption === 'high') products.sort((a, b) => b.price - a.price);

  return (
    <div className="min-h-screen bg-gray-50 pb-20 relative">
      <div className="bg-purple-600 text-white text-center py-10 px-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-2 text-sm md:text-base max-w-2xl mx-auto">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => navigate('/dashboard/cart')}
            className={`px-6 py-2 rounded-full font-semibold ${
              activeTab === 'cart' ? 'bg-white text-purple-600' : 'border border-white text-white'
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => navigate('/dashboard/wishlist')}
            className={`px-6 py-2 rounded-full font-semibold ${
              activeTab === 'wishlist' ? 'bg-white text-purple-600' : 'border border-white text-white'
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 px-4 flex justify-between items-center flex-wrap gap-4">
        <h2 className="text-xl font-bold capitalize">{activeTab}</h2>
        <div className="flex items-center gap-4">
          {activeTab === 'cart' && (
            <p className="text-lg font-semibold">Total cost: ${totalCost.toFixed(2)}</p>
          )}
          {/* Sort */}
          <div className="relative">
            <select
              onChange={(e) => setSortOption(e.target.value)}
              value={sortOption}
              className="block appearance-none w-full px-4 py-2 pr-10 border border-purple-500 rounded-full text-purple-600 bg-white hover:bg-purple-50 transition ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            >
              <option value="default">Sort by Price (Default)</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none">
              ▼
            </div>
          </div>
          {activeTab === 'cart' && (
            <button
              onClick={handlePurchase}
              className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition"
            >
              Purchase
            </button>
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-6 px-4 grid gap-6">
        {products.length > 0 ? (
          products.map((item) => (
            <div
              key={item.product_id}
              className="flex bg-white rounded-xl shadow-md p-4 items-center justify-between hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4">
                <div className="bg-gray-100 p-2 rounded-xl w-24 h-24 flex justify-center items-center">
                  <img src={item.product_image} alt={item.product_title} className="object-contain h-20" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.product_title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                  <p className="text-sm font-medium mt-1">Price: ${item.price.toFixed(2)}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item.product_id)}
                className="text-red-500 hover:bg-red-100 p-2 rounded-full"
              >
                <AiOutlineClose size={20} />
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No products in this tab.</p>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="bg-white shadow-xl rounded-2xl p-6 w-[90%] max-w-sm text-center pointer-events-auto">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 rounded-full p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3.25-3.25a1 1 0 011.414-1.414L8.5 11.086l6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <h2 className="text-lg font-bold mb-1">Payment Successfully</h2>
            <p className="text-sm text-gray-600 mb-2">Thanks for purchasing.</p>
            <p className="text-base font-medium mb-4">Total: ${finalCost.toFixed(2)}</p>
            <button
              onClick={() => setShowModal(false)}
              className="px-5 py-2 bg-gray-100 text-sm rounded-full hover:bg-gray-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
