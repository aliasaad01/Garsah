import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-4 text-[#2D5A27]">
            <Leaf size={20} />
            <span className="text-2xl font-bold font-serif">Garsah</span>
          </div>
          <p className="text-gray-400 text-sm italic">
            Curating digital gardens since 2024. Hand-picked botanical
            treasures.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-base uppercase tracking-widest mb-6 text-[#2D5A27]">
            Resources
          </h4>
          <ul className="text-gray-500 text-sm space-y-3">
            <li>
              <a href="#" className="hover:text-[#2D5A27]">
                Care Guide
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2D5A27]">
                Plant Health SOS
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-base uppercase tracking-widest mb-6 text-[#2D5A27]">
            Legal
          </h4>
          <ul className="text-gray-500 text-sm space-y-3">
            <li>
              <a href="#" className="hover:text-[#2D5A27]">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2D5A27]">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-base uppercase tracking-widest mb-6 text-[#2D5A27]">
            Stay Rooted
          </h4>
          <div className="flex border-b border-gray-200 py-2">
            <input
              type="email"
              placeholder="email@example.com"
              className="bg-transparent outline-none text-sm w-full"
            />
            <button className="text-[#2D5A27] font-bold">→</button>
          </div>
        </div>
      </div>
      <div className="mt-16 text-center text-gray-300 text-[10px] uppercase tracking-[0.2em]">
        © 2026 Garsah Botanical Editorial. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
