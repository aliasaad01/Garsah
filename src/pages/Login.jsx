import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, ArrowRight, Leaf } from "lucide-react";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // منطق بسيط لمحاكاة تسجيل الدخول
    if (email === "admin@garsah.com" && password === "123456") {
      toast.success("Welcome back, Admin!");
      navigate("/dashboard");
    } else if (email && password) {
      toast.success("Logged in successfully! 🌿");
      navigate("/my-plants");
    } else {
      toast.error("Please fill in all fields.");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-12">
      <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100 w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Logo & Header */}
        <div className="text-center mb-10">
          <div className="inline-flex p-3 bg-green-50 rounded-2xl text-[#2D5A27] mb-4">
            <Leaf size={28} />
          </div>
          <h2 className="text-3xl font-serif text-gray-900">Welcome Back</h2>
          <p className="text-gray-400 text-sm mt-2">
            Continue your botanical journey
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-green-100 transition-all text-sm"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-green-100 transition-all text-sm"
              />
              <Lock className="absolute left-4 top-4 text-gray-300" size={18} />
            </div>
          </div>

          <button className="w-full bg-[#2D5A27] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-green-900 transition shadow-lg shadow-green-900/10">
            Sign In <ArrowRight size={18} />
          </button>
        </form>

        <p className="text-center mt-8 text-sm text-gray-500">
          New to Garsah?{" "}
          <Link
            to="/register"
            className="text-[#2D5A27] font-bold hover:underline"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
