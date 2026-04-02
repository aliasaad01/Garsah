import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import PlantDetails from "./pages/PlantDetails";
import Layout from "./components/common/Layout";
import MyPlants from "./pages/MyPlants";
import { PlantProvider } from "./context/PlantContext";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <PlantProvider>
      <Routes>
        {/* Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="plant/:id" element={<PlantDetails />} />
          <Route path="my-plants" element={<MyPlants />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>

      <Toaster position="left-bottom" reverseOrder={false} />
    </PlantProvider>
  );
}

export default App;
