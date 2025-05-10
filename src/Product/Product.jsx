import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import products from '../data/products.json';

const categories = ['All Product', 'Laptops', 'Phones', 'Accessories', 'Smart Watches', 'MacBook', 'iPhone'];

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Product');
  const navigate = useNavigate();

  const filteredProducts = selectedCategory === 'All Product'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 pt-80 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Explore Cutting-Edge Gadgets
      </h2>

      <div className="flex gap-6 max-w-7xl mx-auto">
        {/* Sidebar */}
        <aside className="w-48 space-y-3">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(cat)}
              className={`w-full py-2 px-4 rounded-full text-sm font-medium ${
                selectedCategory === cat
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-purple-50'
              } transition`}
            >
              {cat}
            </button>
          ))}
        </aside>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 flex-1">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onViewDetails={() => navigate(`/products/${product.id}`)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
