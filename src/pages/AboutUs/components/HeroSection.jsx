import aboutbg from "../../../assets/images/aboutbg.jpg"
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-[600px] bg-cover bg-conic bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${aboutbg})` }}
    >
      <div
        className="absolute bottom-12 right-12 z-10 max-w-2xl text-white"
        dir="rtl"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
          أهلا بك في OG_Sports
          </h1>

          <motion.p
            className="mb-8 leading-relaxed text-lg font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            نؤمن أن الأداء العالي يبدأ من التفاصيل. حيث نوفر لك ملابس تمنحك مرونة الحركة، ومعدات صُنعت لتدوم وتدعم كل تحدياتك.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

