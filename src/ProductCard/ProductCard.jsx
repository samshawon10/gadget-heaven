import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { product_id, product_title, price, product_image } = product;

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 text-center">
      <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
        <img src={product_image} alt={product_title} className="h-full w-full object-contain" />
      </div>
      <h3 className="font-semibold text-lg">{product_title}</h3>
      <p className="text-sm text-gray-600 mb-3">Price: ${price}</p>
      <button
        className="border border-purple-600 text-purple-600 px-4 py-1 rounded-full text-sm hover:bg-purple-50 transition"
        onClick={() => navigate(`/product/${product_id}`)}
      >
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
