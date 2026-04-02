import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { plants } from "../data/mockData";
import {
  Droplets,
  Sun,
  Thermometer,
  Sparkles,
  ArrowLeft,
  ShoppingCart,
  PlusCircle,
} from "lucide-react";
import Button from "../components/ui/Button";
import { usePlants } from "../context/PlantContext";

const PlantDetails = () => {
  const { addToMyPlants } = usePlants();

  // 1. جلب الـ ID من الرابط
  const { id } = useParams();

  // 2. البحث عن النبتة المطلوبة (استخدام useMemo للأداء)
  const plant = useMemo(() => {
    return plants.find((p) => p.id === parseInt(id));
  }, [id]);

  // في حال لم يتم العثور على النبتة
  if (!plant) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-serif text-[#2D5A27]">Plant not found</h2>
        <Link to="/shop" className="mt-4 text-gray-500 underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="px-6 py-10 md:px-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Breadcrumbs */}
      <nav className="mb-10 flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400">
        <Link
          to="/shop"
          className="hover:text-[#2D5A27] flex items-center gap-1"
        >
          <ArrowLeft size={12} /> Shop
        </Link>
        <span>/</span>
        <span className="text-gray-800">{plant.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* القسم اليسار: التفاصيل والوصف */}
        <div className="order-2 md:order-1 max-w-lg m-auto text-center md:m-0 md:text-start">
          <h2 className="text-[10px] font-bold text-gray-400 tracking-[0.3em] uppercase mb-4">
            Botanical Specimen No. {plant.id}00{plant.id}
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-10 italic">
            "
            {plant.description ||
              "A beautiful addition to your home, bringing nature's tranquility to your personal sanctuary."}
            "
          </p>

          {/* أزرار الأكشن */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button className="flex-1 flex items-center justify-center gap-2">
              <ShoppingCart size={18} /> Add to Cart
            </Button>
            <Button
              onClick={() => addToMyPlants(plant)}
              variant="secondary"
              className="flex-1 flex items-center justify-center gap-2"
            >
              <PlusCircle size={18} /> Add to My Plants
            </Button>
          </div>

          {/* Care Stats (المعلومات الخاصة بالسقاية والرعاية) */}
          <div className="grid grid-cols-3 gap-8 py-8 border-y border-gray-100">
            <CareInfo
              icon={<Droplets size={20} className="text-blue-300" />}
              label="Water"
              value="Weekly"
            />
            <CareInfo
              icon={<Sun size={20} className="text-yellow-400" />}
              label="Light"
              value="Indirect"
              border
            />
            <CareInfo
              icon={<Thermometer size={20} className="text-red-300" />}
              label="Temp"
              value="18°C - 24°C"
            />
          </div>
        </div>

        {/* القسم اليمين: الصورة مع الاسم */}
        <div className="order-1 md:order-2 relative group m-auto">
          <div className="rounded-[50px] overflow-hidden aspect-[4/5] shadow-2xl">
            <img
              src={plant.image}
              alt={plant.name}
              className="w-full h-full object-cover transition duration-1000 hover:scale-105"
            />
          </div>
          {/* الاسم أسفل يسار الصورة */}
          <div className="absolute bottom-10 left-10 text-white">
            <h1 className="text-5xl md:text-7xl font-serif leading-none drop-shadow-lg">
              {plant.name.split(" ")[0]} <br />
              <span className="text-3xl md:text-5xl opacity-90">
                {plant.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>
            <p className="text-xl opacity-70 italic mt-4 drop-shadow-md">
              {plant.scientificName}
            </p>
          </div>
        </div>
      </div>

      {/* Pro Editorial Tip Box */}
      <div className="mt-24 mb-10 bg-[#2D5A27] rounded-[40px] p-10 md:p-16 text-white flex flex-col md:flex-row items-center gap-10 shadow-2xl shadow-green-900/30">
        <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center flex-shrink-0">
          <Sparkles size={40} className="text-white" />
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.4em] opacity-50 mb-4">
            Pro Editorial Tip
          </h4>
          <p className="font-serif text-2xl md:text-3xl leading-snug">
            "To maximize leaf size and gloss, wipe the leaves monthly with a
            damp cloth. This allows optimal light absorption and keeps your
            companion breathing freely."
          </p>
        </div>
      </div>
    </div>
  );
};

// مكون صغير للمعلومات (Helper Component)
const CareInfo = ({ icon, label, value, border }) => (
  <div
    className={`text-center ${border ? "border-x border-gray-100 px-4" : ""}`}
  >
    <div className="mb-2 flex justify-center">{icon}</div>
    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">
      {label}
    </p>
    <p className="text-sm font-bold text-gray-800">{value}</p>
  </div>
);

export default PlantDetails;
