import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/products.json';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { toast } from 'react-hot-toast';

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products.find((item) => item.product_id === productId);

  const [inCart, setInCart] = useState(false);
  const [inWishlist, setInWishlist] = useState(false);

  useEffect(() => {
    const navbar = document.querySelector('nav');
    if (navbar) {
      navbar.classList.add('bg-white', 'text-black');
    }

    return () => {
      if (navbar) {
        navbar.classList.remove('bg-white', 'text-black');
      }
    };
  }, []);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const wishlist = JSON.parse(localStorage.getItem('wishlistItems')) || [];

    setInCart(cart.some(item => item.product_id === productId));
    setInWishlist(wishlist.some(item => item.product_id === productId));
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-2xl font-semibold text-gray-800">Product Not Found</h2>
      </div>
    );
  }

  const {
    product_title,
    product_image,
    price,
    description,
    specification,
    availability,
    rating,
    reviews_count,
  } = product;

 

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    if (!cart.some(item => item.product_id === productId)) {
      const updated = [...cart, product];
      localStorage.setItem('cartItems', JSON.stringify(updated));
      setInCart(true);
      toast.success('Added to Cart 🛒');
    } else {
      toast.error('Item already in Cart');
    }
    navigate('/dashboard');
  };
  
  const handleAddToWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    if (!wishlist.some(item => item.product_id === productId)) {
      const updated = [...wishlist, product];
      localStorage.setItem('wishlistItems', JSON.stringify(updated));
      setInWishlist(true);
      toast.success('Added to Wishlist ❤️');
    } else {
      toast.error('Item already in Wishlist');
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-purple-600 text-white py-8 text-center">
        <h2 className="text-3xl font-bold">Product Details</h2>
        <p className="mt-2">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all.</p>
      </div>

      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start bg-white rounded-2xl shadow-lg mt-10">
   
       <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-xl flex justify-center items-center shadow-sm hover:shadow-md transition-shadow duration-300">
        <img
          src={product_image}
          alt={product_title}
          className="h-80 object-contain rounded-lg transition-transform duration-500 hover:scale-105"
        />
      </div>

     
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-gray-900">{product_title}</h2>
          <p className="text-lg font-semibold text-gray-800">Price: ${price.toFixed(2)}</p>

          <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${availability ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {availability ? 'In Stock' : 'Out of Stock'}
          </span>

          <p className="text-sm text-gray-600">{description}</p>

          <div>
            <p className="font-semibold text-gray-800">Specification:</p>
            <ul className="list-disc ml-5 text-sm text-gray-600">
              {specification.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex text-yellow-500">
              {Array.from({ length: 5 }, (_, i) => (
                i < Math.floor(rating) ? (
                  <BsStarFill key={i} />
                ) : i < rating ? (
                  <BsStarHalf key={i} />
                ) : (
                  <BsStar key={i} />
                )
              ))}
            </div>
            <span className="text-sm text-gray-600">({reviews_count})</span>
          </div>

          <div className="flex gap-4 mt-4">
            <button
              onClick={handleAddToCart}
              disabled={inCart}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                inCart ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-purple-600 text-white hover:bg-purple-700'
              }`}
            >
              {inCart ? 'Already in Cart' : 'Add to Cart'}
            </button>

            <button
              onClick={handleAddToWishlist}
              disabled={inWishlist}
              className={`px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition ${
                inWishlist ? 'bg-gray-200 text-gray-600 cursor-not-allowed' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {inWishlist ? <AiFillHeart className="text-red-500" /> : <AiOutlineHeart />}
              {inWishlist ? 'Wishlisted' : 'Wishlist'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
