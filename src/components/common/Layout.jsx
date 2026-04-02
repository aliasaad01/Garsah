import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9F5]">
      {/* الـ Navbar ثابت في الأعلى */}
      <Navbar />

      {/* محتوى الصفحات المتغير */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* الـ Footer ثابت في الأسفل */}
      <Footer />
    </div>
  );
};

export default Layout;
