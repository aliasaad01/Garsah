import { plants } from "../data/mockData";
import {
  Users,
  Leaf,
  FileText,
  Download,
  Plus,
  Search,
  Edit2,
  Trash2,
  CheckCircle,
  Eye,
  Truck,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="bg-[#F9F9F9] min-h-screen px-6 py-10 md:px-12 animate-in fade-in duration-700">
      {/* Header Section */}
      <div className="mb-10 text-gray-400">
        <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2">
          Management Portal
        </p>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-4xl font-serif text-black leading-none">
            Executive Overview
          </h1>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-50 transition">
              <Download size={16} /> Export Report
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-[#2D5A27] text-white rounded-full text-sm font-medium hover:bg-green-900 transition shadow-lg shadow-green-900/20">
              <Plus size={16} /> New Listing
            </button>
          </div>
        </div>
      </div>

      {/* 1. Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <OverviewCard
          icon={<Users size={20} />}
          label="Total Users"
          value="12,482"
          badge="+12% vs LY"
          color="green"
        />
        <OverviewCard
          icon={<Leaf size={20} />}
          label="Active Plants"
          value="458"
          badge="Active stock"
          color="orange"
        />
        <OverviewCard
          icon={<FileText size={20} />}
          label="Total Orders"
          value="3,120"
          badge="84 Pending"
          color="green"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* 2. Plant Inventory (Left - 2/3 width) */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="p-1.5 bg-white rounded-md border shadow-sm text-green-700">
                <Leaf size={16} />
              </span>{" "}
              Plant Inventory
            </h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search cultivars..."
                className="pl-4 pr-10 py-2 bg-gray-100/50 border-none rounded-lg text-xs outline-none w-48 md:w-64 focus:ring-1 focus:ring-green-700"
              />
              <Search
                className="absolute right-3 top-2.5 text-gray-400"
                size={14}
              />
            </div>
          </div>

          <div className="bg-white rounded-[24px] border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50/50 text-[10px] uppercase tracking-widest text-gray-400">
                <tr>
                  <th className="px-6 py-4 font-bold">Plant Variety</th>
                  <th className="px-6 py-4 font-bold">Category</th>
                  <th className="px-6 py-4 font-bold">Stock</th>
                  <th className="px-6 py-4 font-bold">Price</th>
                  <th className="px-6 py-4 font-bold text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {plants.slice(0, 3).map((plant) => (
                  <tr
                    key={plant.id}
                    className="hover:bg-gray-50/30 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={plant.image}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-bold text-gray-800">
                            {plant.name}
                          </p>
                          <p className="text-[10px] text-gray-400 italic leading-none">
                            {plant.scientificName}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-green-50 text-green-700 text-[10px] font-bold rounded-full uppercase">
                        Tropical
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-600">
                      42 units
                    </td>
                    <td className="px-6 py-4 font-bold text-gray-800">
                      ${plant.price}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-3 text-gray-400">
                        <button className="hover:text-black">
                          <Edit2 size={16} />
                        </button>
                        <button className="hover:text-red-500">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. Recent Orders (Right - 1/3 width) */}
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
            <Truck size={20} className="text-gray-800" /> Recent Orders
          </h2>
          <div className="space-y-4">
            <OrderCard
              id="GS-8902"
              name="Elena Rodriguez"
              time="Today, 11:42 AM"
              status="PROCESSING"
            />
            <OrderCard
              id="GS-8898"
              name="Marcus Thorne"
              time="Yesterday"
              status="SHIPPED"
              tracking="FedEx: 4022..."
            />
            <OrderCard
              id="GS-8901"
              name="Sarah Jenkins"
              time="Today, 09:15 AM"
              status="PROCESSING"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Components المساعدة لتنظيم الكود
const OverviewCard = ({ icon, label, value, badge, color }) => (
  <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm relative overflow-hidden group hover:border-green-200 transition-all">
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-gray-50 rounded-2xl group-hover:bg-green-50 transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
          {label}
        </p>
        <h3 className="text-3xl font-bold text-black">{value}</h3>
      </div>
    </div>
    <span
      className={`absolute top-6 right-6 text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter ${
        color === "green"
          ? "bg-green-100 text-green-700"
          : "bg-orange-100 text-orange-700"
      }`}
    >
      {badge}
    </span>
  </div>
);

const OrderCard = ({ id, name, time, status, tracking }) => (
  <div className="bg-white p-5 rounded-[24px] border border-gray-100 shadow-sm relative">
    <div className="flex justify-between items-start mb-1">
      <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">
        ORDER #{id}
      </p>
      <span
        className={`text-[8px] font-bold px-2 py-0.5 rounded-full ${status === "SHIPPED" ? "bg-gray-100 text-gray-500" : "bg-green-100 text-green-700"}`}
      >
        {status}
      </span>
    </div>
    <h4 className="font-bold text-gray-800 mb-1">{name}</h4>
    <p className="text-[10px] text-gray-400 flex items-center gap-1 mb-4">
      <FileText size={10} /> {time}
    </p>

    {tracking && (
      <p className="text-[10px] text-gray-400 italic mb-4">
        Carrier: {tracking}
      </p>
    )}

    <div className="flex gap-2">
      <button className="flex-grow bg-[#2D5A27] text-white py-2 rounded-xl text-[10px] font-bold flex items-center justify-center gap-2 hover:bg-green-900 transition">
        <CheckCircle size={12} /> Mark Shipped
      </button>
      <button className="p-2 bg-gray-50 text-gray-400 rounded-xl hover:bg-gray-100 transition">
        <Eye size={14} />
      </button>
    </div>
  </div>
);

export default Dashboard;
