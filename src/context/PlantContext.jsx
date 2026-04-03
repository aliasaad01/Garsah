import { createContext, useState, useContext } from "react";
import toast from "react-hot-toast";

// 1. Create Context
const PlantContext = createContext();

// 2. Context Provider
export const PlantProvider = ({ children }) => {
  const [myPlants, setMyPlants] = useState([]);

  const addToMyPlants = (plant) => {
    const isExist = myPlants.find((p) => p.id === plant.id);

    if (isExist) {
      return toast.error(`${plant.name} it already exists!`);
    }

    const newPlant = {
      ...plant,
      lastWatered: "Just added",
      health: "Excellent",
      waterSchedule: 7,
    };

    setMyPlants((prev) => [...prev, newPlant]);
    return toast.success(`${plant.name} added successfully! 🌿`);
  };

  return (
    <PlantContext.Provider value={{ myPlants, addToMyPlants, setMyPlants }}>
      {children}
    </PlantContext.Provider>
  );
};

// Custom Hook
// eslint-disable-next-line react-refresh/only-export-components
export const usePlants = () => useContext(PlantContext);
