import { useState, useMemo } from "react";
import { plants } from "../data/mockData";
import PlantCard from "../components/ui/PlantCard";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

const Shop = () => {
  // 1. States for filter, page, search
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // 2. Filter the plants
  const filteredPlants = useMemo(() => {
    return plants.filter((plant) => {
      const matchesSearch = plant.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesCategory = category === "All" || plant.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, category]);

  // 3. For Pagination
  const totalPages = Math.ceil(filteredPlants.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPlants = filteredPlants.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  // 4. Next and Previous page
  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="px-6 py-10 md:px-12 animate-in fade-in duration-500">
      {/* Header & Filter Section */}
      <div className="flex flex-col gap-8 mb-16">
        <div>
          <h1 className="text-4xl md:text-6xl font-serif text-[#2D5A27] mb-4">
            The Greenhouse
          </h1>
          <p className="text-gray-500 italic max-w-sm font-light">
            "Curating living sculptures for the modern home. Explore our
            sustainable collection."
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Filter Buttons */}
          <div className="flex bg-gray-200 p-1 rounded-full w-fit">
            {["All", "Indoor", "Outdoor"].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                  category === cat
                    ? "bg-[#2D5A27] text-white shadow-md"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-8/12 md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search cultivars..."
              className="w-full border-b border-gray-200 py-2 pl-8 outline-none focus:border-[#2D5A27] transition-colors bg-transparent text-sm"
            />
            <Search
              size={16}
              className="absolute left-0 top-2.5 text-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Display Filtered Plants */}
      {currentPlants.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {currentPlants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center text-gray-400 italic">
          No plants found matching your criteria.
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-24 flex justify-center items-center gap-3">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center transition-all ${
              currentPage === 1
                ? "opacity-30 cursor-not-allowed"
                : "hover:border-[#2D5A27] text-[#2D5A27]"
            }`}
          >
            <ChevronLeft size={18} />
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => goToPage(index + 1)}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                currentPage === index + 1
                  ? "bg-[#2D5A27] text-white"
                  : "border border-gray-200 text-gray-400 hover:border-[#2D5A27]"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center transition-all ${
              currentPage === totalPages
                ? "opacity-30 cursor-not-allowed"
                : "hover:border-[#2D5A27] text-[#2D5A27]"
            }`}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Shop;
