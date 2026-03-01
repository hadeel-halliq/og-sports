import { motion } from "framer-motion";
import Button from "../../../components/common/Button";

export default function StartYourJourney() {

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2, // كل عنصر يظهر بعد الآخر
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="container mx-auto px-12 py-12"
      dir="rtl"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.h2
        className="font-bold text-lg md:text-2xl mb-6"
        variants={itemVariants}
      >
        ابدأ رحلتك اليوم
      </motion.h2>

      <motion.p
        className="mb-4 text-sm md:text-lg"
        variants={itemVariants}
      >
        في Sportify لا نبيع منتجات فقط —
      </motion.p>

      <motion.p
        className="mb-4 text-sm md:text-lg"
        variants={itemVariants}
      >
        بل نقدم تجربة تدعم قوتك، وتواكب طموحك، وتمنحك الثقة في كل خطوة.
      </motion.p>
      <Button buttonName="ابدأ الان" />
    </motion.div>
  );
}