import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { product_id, product_title, price, product_image } = product;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 p-4 text-center group cursor-pointer">
      <div className="w-full h-40 mb-4 overflow-hidden flex items-center justify-center">
        <img
          src={product_image}
          alt={product_title}
          className="h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="font-semibold text-base md:text-lg line-clamp-2 mb-1">{product_title}</h3>
      <p className="text-sm text-gray-600 mb-3">Price: ${price}</p>

      <button
        className="border border-purple-600 text-purple-600 px-4 py-1.5 rounded-full text-sm hover:bg-purple-600 hover:text-white transition-colors duration-300"
        onClick={() => navigate(`/product/${product_id}`)}
      >
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
