import { useState } from "react";
import { Leaf, Menu, X, User, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 px-6 py-4 md:px-12 flex justify-between items-center shadow-md h-16">
      <Link to="/" className="flex items-center gap-2">
        <Leaf className="text-[#2D5A27]" />
        <span className="text-xl font-bold font-serif text-[#2D5A27]">
          Garsah
        </span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 font-medium text-sm uppercase tracking-widest text-gray-600">
        <Link to="/" className="hover:text-[#2D5A27]">
          Home
        </Link>
        <Link to="/shop" className="hover:text-[#2D5A27]">
          Shop
        </Link>
        <Link to="/my-plants" className="hover:text-[#2D5A27]">
          My Plants
        </Link>
        <Link to="/dashboard" className="hover:text-[#2D5A27]">
          Dashboard
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Link title="Profile" to="/login">
          <User className="w-7 h-7 text-gray-600 hover:text-[#2D5A27] hover:bg-gray-100 rounded-full p-1" />
        </Link>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b p-6 flex flex-col gap-4 md:hidden shadow-xl animate-in fade-in slide-in-from-top-2">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#2D5A27]"
          >
            Home
          </Link>
          <Link
            to="/shop"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#2D5A27]"
          >
            Shop
          </Link>
          <Link
            to="/my-plants"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#2D5A27]"
          >
            My Plants
          </Link>
          <Link
            to="/dashboard"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#2D5A27]"
          >
            Dashboard
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
