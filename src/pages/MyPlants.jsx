import { useState } from "react";
// import { myOwnedPlants } from "../data/mockData";
import { Droplets, Heart, Calendar, Plus, Search } from "lucide-react";
import Button from "../components/ui/Button";
import { usePlants } from "../context/PlantContext";
import { Link } from "react-router-dom";

const MyPlants = () => {
  const { myPlants } = usePlants();
  const [userPlants, setUserPlants] = useState(myPlants);

  // دالة لمحاكاة سقاية النبتة (Action)
  const handleWaterPlant = (id) => {
    const updated = userPlants.map((p) =>
      p.id === id ? { ...p, lastWatered: "Just now", health: "Excellent" } : p,
    );
    setUserPlants(updated);
    alert("Refreshing your plant's hydration! 💧");
  };

  return (
    <div className="px-6 py-10 md:px-12 animate-in fade-in duration-700 bg-[#F8F9F5] min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-serif text-[#2D5A27] mb-4">
            My Urban Jungle
          </h1>
          <p className="text-gray-500 italic">
            You are currently nurturing {userPlants.length} botanical
            companions.
          </p>
        </div>
        <Link to={"/shop"}>
          <Button className="flex items-center gap-2">
            <Plus size={18} /> Add New Plant
          </Button>
        </Link>
      </div>

      {/* Stats Summary (شريط ملخص الحالة) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <StatCard
          icon={<Heart className="text-red-400" />}
          label="Overall Health"
          value="94%"
        />
        <StatCard
          icon={<Droplets className="text-blue-400" />}
          label="Needs Water"
          value="2 Plants"
        />
        <StatCard
          icon={<Calendar className="text-[#2D5A27]" />}
          label="Next Fertilizing"
          value="In 4 days"
        />
      </div>

      {/* Plants Management Table/Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {userPlants.map((plant) => (
          <div
            key={plant.id}
            className="bg-white rounded-[32px] p-6 flex flex-col sm:flex-row gap-6 shadow-sm border border-gray-50 hover:shadow-md transition-shadow"
          >
            {/* Plant Image */}
            <div className="w-full sm:w-40 h-40 rounded-2xl overflow-hidden shrink-0">
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Plant Info & Controls */}
            <div className="flex-grow flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    {plant.name}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      plant.health === "Excellent"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {plant.health}
                  </span>
                </div>
                <div className="space-y-2 text-sm text-gray-500">
                  <p className="flex items-center gap-2">
                    <Droplets size={14} /> Last watered: {plant.lastWatered}
                  </p>
                  <p className="flex items-center gap-2">
                    <Calendar size={14} /> Schedule: Every {plant.waterSchedule}{" "}
                    days
                  </p>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => handleWaterPlant(plant.id)}
                  className="flex-1 bg-[#2D5A27] text-white py-3 rounded-xl font-bold text-sm hover:bg-green-900 transition flex items-center justify-center gap-2"
                >
                  <Droplets size={16} /> Mark as Watered
                </button>
                <button className="px-4 py-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State (إذا لم يكن هناك نباتات) */}
      {userPlants.length === 0 && (
        <div className="text-center py-20 bg-white rounded-[40px] border-2 border-dashed border-gray-100">
          <p className="text-gray-400 font-serif text-xl">
            Your sanctuary is waiting for its first inhabitant.
          </p>
          <Link to={"/shop"}>
            <Button variant="secondary" className="mt-6">
              Go to Shop
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

// مكون صغير لبطاقات الإحصائيات
const StatCard = ({ icon, label, value }) => (
  <div className="bg-white p-6 rounded-3xl flex items-center gap-4 shadow-sm border border-gray-50">
    <div className="w-12 h-12 bg-[#F8F9F5] rounded-2xl flex items-center justify-center text-xl">
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
        {label}
      </p>
      <p className="text-xl font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

export default MyPlants;
