import { useState, useEffect, useMemo } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function Statistics() {
  useEffect(() => {
    document.title = 'Gadget Heaven | Statistics'; 
  }, []);

  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const normalizeData = (products) => {
    return products.map((product) => {
      const normalizedPrice = Math.min(100, Math.round(product.price / 25));
      return {
        name: product.product_id,
        productName: product.product_title,
        Price: normalizedPrice,
        Total: Math.round(normalizedPrice * 0.85),
        Rating: Math.round(product.rating * 20),
      };
    });
  };

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
    const fetchProductData = async () => {
      try {
        const response = await fetch('/data/products.json');
        if (!response.ok) throw new Error('Failed to fetch product data');
        const products = await response.json();
        const normalized = normalizeData(products);
        setProductData(normalized);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching product data:', err);
        setError('Failed to load product data.');
        setProductData([]);
        setIsLoading(false);
      }
    };

    fetchProductData();
  }, []);

  const stats = useMemo(() => {
    const totalProducts = productData.length;
    const averagePrice = totalProducts
      ? productData.reduce((sum, product) => sum + product.Price, 0) / totalProducts
      : 0;
    const averageRating =
      totalProducts ? productData.reduce((sum, product) => sum + product.Rating, 0) / totalProducts : 0;

    return {
      total_products: totalProducts,
      average_price: averagePrice,
      average_rating: averageRating,
    };
  }, [productData]);

  return (
    <div className="w-full bg-white p-6 rounded-lg">

<div className="bg-purple-600 text-white text-center py-10 px-4">
        <h1 className="text-3xl font-bold">Product Statistics</h1>
        <p className="mt-2 text-sm md:text-base max-w-2xl mx-auto">
        Explore the latest gadgets and accessories. Visualize key statistics including price and ratings.
        </p>
        </div>
    

      {/* Summary Stats */}
      {stats && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6 text-sm text-gray-700">
          <div className="p-4 bg-purple-50 rounded-lg">
            <p className="text-gray-500">Total Products</p>
            <p className="font-bold text-lg">{stats.total_products}</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <p className="text-gray-500">Average Price</p>
            <p className="font-bold text-lg">${stats.average_price.toFixed(2)}</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <p className="text-gray-500">Average Rating</p>
            <p className="font-bold text-lg">{stats.average_rating.toFixed(1)}</p>
          </div>
        </div>
      )}

      {/* Chart Section */}
      <div className="mt-6">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-500">Loading data...</p>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-red-500">{error}</p>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={productData} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>
              <XAxis dataKey="name" tick={{ fontSize: 10 }} interval={0} height={60} />
              <YAxis domain={[0, 100]} />
              <Tooltip
                formatter={(value, name) => {
                  if (name === 'Price') return [`$${value * 25}`, 'Price'];
                  return [value, name];
                }}
                labelFormatter={(label) => {
                  const product = productData.find((item) => item.name === label);
                  return product ? product.productName : label;
                }}
              />
              <defs>
                <linearGradient id="totalFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#9333EA" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#9333EA" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <Bar dataKey="Price" fill="#9333EA" radius={[4, 4, 0, 0]} barSize={20} />
              <Bar dataKey="Total" fill="url(#totalFill)" radius={[4, 4, 0, 0]} barSize={40} />
              <Bar dataKey="Rating" fill="#FF6384" radius={[4, 4, 0, 0]} barSize={10} />
              <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
