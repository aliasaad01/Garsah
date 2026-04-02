import { ArrowRight, Bell, MessageCircle, Truck, Sparkles } from "lucide-react";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* 1. Hero Section */}
      <section className="px-6 py-10 md:px-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 text-center md:text-left">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-4">
            Botanical Editorial Vol 01
          </p>
          <h1 className="text-5xl md:text-8xl font-serif text-[#2D5A27] leading-[1.1] mb-8">
            Nurture Your <br /> Living Sanctuary
          </h1>
          <p className="text-gray-500 mb-10 max-w-md mx-auto md:mx-0 leading-relaxed">
            Transform your home into a breathing conservatory with curated plant
            collections and expert-led botanical care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to={"/shop"}>
              <Button variant="primary">Start Your Green Journey</Button>
            </Link>
            <Button variant="secondary">Browse Collection</Button>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="rounded-[40px] md:rounded-[80px] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-auto md:h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1000"
              alt="Hero Plant"
              className="w-full h-full object-cover hover:scale-105 transition duration-1000"
            />
          </div>
        </div>
      </section>

      {/* 2. The Garsah Experience (Features) */}
      <section className="bg-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16 items-center">
            <div className="md:col-span-1">
              <h2 className="text-4xl font-serif text-[#2D5A27] mb-6">
                The Garsah Experience
              </h2>
              <p className="text-gray-500 italic leading-relaxed">
                "Everything you need to sustain a thriving indoor garden,
                simplified through intelligent design."
              </p>
            </div>

            <div className="md:col-span-2 grid md:grid-cols-2 gap-12">
              <FeatureItem
                icon={<Bell className="text-[#2D5A27]" size={24} />}
                title="Smart Reminders"
                desc="Our intelligent system tracks light levels and humidity to send perfectly timed care alerts."
              />
              <FeatureItem
                icon={<MessageCircle className="text-[#2D5A27]" size={24} />}
                title="Expert Advice"
                desc="Direct access to botanical specialists. From pest management to soil chemistry, we guide you."
              />
              <FeatureItem
                icon={<Truck className="text-[#2D5A27]" size={24} />}
                title="Easy Shopping"
                desc="Ethically sourced, hand-picked specimens delivered from the nursery to your doorstep."
              />
              <FeatureItem
                icon={<Sparkles className="text-[#2D5A27]" size={24} />}
                title="Pro Editorial Tips"
                desc="Curated care guides that delve into the nuances of light, air, and earth for your companions."
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Plant Preview (CTA) */}
      <section className="py-20 px-6 md:px-12 text-center md:text-start">
        <div className="bg-[#2D5A27] rounded-[40px] p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">
              Ready to find your next green companion?
            </h2>
            <p className="text-green-100/70 mb-8 leading-relaxed">
              Explore our latest seasonal drop of rare succulents and lush
              tropicals.
            </p>
            <Link to={"/shop"}>
              <Button className="bg-white text-[#306429] border hover:border-green-50 hover:bg-[#2a5724] hover:text-green-50">
                Shop All Plants <ArrowRight className="inline ml-2" size={18} />
              </Button>
            </Link>
          </div>
          <div className="w-full md:w-1/3 aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white/10">
            <img
              src="https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=1000"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
              alt="Featured"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureItem = ({ icon, title, desc }) => (
  <div className="flex flex-col gap-4 bg-gray-100 p-4 rounded-2xl shadow-md hover:scale-105 transition-all duration-300">
    <div className="w-12 h-12 bg-[#F8F9F5] rounded-2xl flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-xl font-bold tracking-tight text-[#2D5A27]">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    <a
      href="#"
      className="text-xs font-bold uppercase tracking-widest w-fit pb-1 hover:text-[#2D5A27] hover:border-[#2D5A27] transition-colors"
    >
      Learn More
    </a>
  </div>
);

export default Home;
