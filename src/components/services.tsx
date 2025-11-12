import { motion } from "framer-motion";
import { FaBolt, FaCheckCircle, FaInfinity } from "react-icons/fa";

const Services = () => {
  const items = [
    {
      title: "Instant Solutions",
      desc: "Fast, efficient, and on-point.",
      icon: <FaBolt className="text-green-500 w-10 h-10 mx-auto mb-4" />,
    },
    {
      title: "Guaranteed Excellence",
      desc: "Quality that exceeds expectations.",
      icon: <FaCheckCircle className="text-green-500 w-10 h-10 mx-auto mb-4" />,
    },
    {
      title: "Endless Support",
      desc: "Here for your journey, always.",
      icon: <FaInfinity className="text-green-500 w-10 h-10 mx-auto mb-4" />,
    },
  ];

  return (
    <section className="py-20 bg-[#0D0D0D] text-white relative overflow-hidden">
      {/* Optional floating particle background */}
      <div className="absolute inset-0 z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-green-500/30 rounded-full animate-float"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 justify-center relative z-10">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3, duration: 0.6 }}
            className="bg-[#1A1A1A] p-8 rounded-xl shadow-lg text-center hover:scale-105 hover:shadow-2xl transition-transform duration-500 flex-1"
          >
            {item.icon}
            <h3 className="text-xl font-bold mb-2 text-green-500">{item.title}</h3>
            <p className="text-gray-300">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-10px) translateX(5px); }
          }
          .animate-float { animation: float 5s ease-in-out infinite; }
        `}
      </style>
    </section>
  );
};

export default Services;
