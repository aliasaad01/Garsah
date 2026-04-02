import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, Sparkles } from "lucide-react";
import toast from "react-hot-toast";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password) {
      toast.success(`Welcome to the family, ${formData.name}! ✨`);
      navigate("/login");
    } else {
      toast.error("All fields are required.");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-12">
      <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100 w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="text-center mb-10">
          <div className="inline-flex p-3 bg-green-50 rounded-2xl text-[#2D5A27] mb-4">
            <Sparkles size={28} />
          </div>
          <h2 className="text-3xl font-serif text-gray-900">Join Garsah</h2>
          <p className="text-gray-400 text-sm mt-2">
            Start your digital conservatory today
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">
              Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="John Doe"
                className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-green-100 text-sm"
              />
              <User className="absolute left-4 top-4 text-gray-300" size={18} />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="email@example.com"
                className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-green-100 text-sm"
              />
              <Mail className="absolute left-4 top-4 text-gray-300" size={18} />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder="Min 8 characters"
                className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-green-100 text-sm"
              />
              <Lock className="absolute left-4 top-4 text-gray-300" size={18} />
            </div>
          </div>

          <button className="w-full bg-[#2D5A27] text-white py-4 rounded-2xl font-bold hover:bg-green-900 transition mt-4">
            Create Free Account
          </button>
        </form>

        <p className="text-center mt-8 text-sm text-gray-500">
          Already a member?{" "}
          <Link
            to="/login"
            className="text-[#2D5A27] font-bold hover:underline"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
