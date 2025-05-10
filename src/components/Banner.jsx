import { useNavigate } from 'react-router-dom';

const Banner = ({ data }) => {
  const { title, subtitle, image } = data;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/dashboard');
  };

  return (
    <div className="bg-gradient-to-b from-purple-700 to-purple-500 text-white py-20 pb-20 md:pb-60 px-6 rounded-b-[32px] relative flex flex-col items-center">
    
    <div className="text-center px-4 md:px-0 mt-10">
    <h1 className="text-3xl md:text-5xl font-bold leading-tight break-words text-wrap md:break-all">
        {title}
    </h1>
    <p className="mt-3 text-sm md:text-base text-gray-100">
        {subtitle}
    </p>
    <button 
    onClick={handleNavigate}
    className="mt-6 bg-white text-purple-600 font-semibold px-6 py-2 rounded-full shadow-md hover:bg-purple-100 transition">
      Shop Now
    </button>
  </div>
      {image && (
        <div className="absolute inset-x-0 -bottom-60 flex justify-center z-20">
          <div className="p-3 rounded-[32px] bg-white/50 backdrop-blur-md max-w-xl w-[90%] md:w-auto">
            <img
              src={image}
              alt="Gadget"
              className="rounded-[24px] w-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
