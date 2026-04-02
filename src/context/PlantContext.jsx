import { createContext, useState, useContext } from "react";
import toast from "react-hot-toast";

// 1. إنشاء السياق (Context)
const PlantContext = createContext();

// 2. إنشاء المزود (Provider) الذي سيلف التطبيق
export const PlantProvider = ({ children }) => {
  const [myPlants, setMyPlants] = useState([]);

  // دالة لإضافة نبتة (تمنع التكرار)
  const addToMyPlants = (plant) => {
    // 1. تحقق أولاً خارج الـ setMyPlants
    const isExist = myPlants.find((p) => p.id === plant.id);

    if (isExist) {
      toast.error(`${plant.name} it already exists!`);
      return; // اخرج من الدالة ولا تفعل شيئاً
    }

    const newPlant = {
      ...plant,
      lastWatered: "Just added",
      health: "Excellent",
      waterSchedule: 7,
    };

    setMyPlants((prev) => [...prev, newPlant]);
    toast.success(`${plant.name} added successfully! 🌿`);
  };

  return (
    <PlantContext.Provider value={{ myPlants, addToMyPlants, setMyPlants }}>
      {children}
    </PlantContext.Provider>
  );
};

// 3. Hook مخصص لسهولة الاستخدام في الصفحات
// eslint-disable-next-line react-refresh/only-export-components
export const usePlants = () => useContext(PlantContext);

//   toast.error(`${plant.name} it already exists!`);
// toast.success(`${plant.name} added successfully! 🌿`);
