import { Droplets, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { usePlants } from "../../context/PlantContext";

const PlantCard = ({ plant }) => {
  const { addToMyPlants } = usePlants();
  return (
    <div className="group">
      {/* قسم الصورة مع النوع */}
      <Link to={`/plant/${plant.id}`}>
        <div className="relative rounded-[30px] overflow-hidden aspect-[4/5] mb-6 bg-gray-100">
          <img
            src={plant.image}
            alt={plant.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
          />
          <span className="absolute top-16 left-6 bg-[#96d48d] backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-bold text-[#3b7932] tracking-widest uppercase shadow-md w-28 text-center">
            {plant.category}
          </span>
          <span className="absolute top-6 left-6 bg-white backdrop-blur-sm px-4 py-1.5 rounded-full text-xs tracking-widest shadow-md flex items-center justify-center gap-1 w-28">
            <Droplets className="inline text-blue-300" size={14} />
            {plant.waterFrequency}
          </span>
        </div>
      </Link>

      {/* معلومات النبتة */}
      <div className="flex justify-between items-start px-2">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{plant.name}</h3>
          <p className="text-xs text-gray-400 italic">{plant.scientificName}</p>
        </div>
        <span className="text-xl font-bold text-[#2D5A27]">
          ${plant.price.toFixed(2)}
        </span>
      </div>

      {/* زر الإضافة للسلة */}
      <button
        onClick={() => addToMyPlants(plant)}
        className="w-full mt-6 bg-[#2D5A27] border border-white hover:border-[#2D5A27] text-white py-4 rounded-full
                          flex justify-center gap-3 items-center hover:bg-white hover:text-[#2D5A27]
                          transition-all duration-300 font-semibold text-sm shadow-sm"
      >
        <ShoppingCart size={18} /> Add to My Plants
      </button>
    </div>
  );
};

export default PlantCard;
