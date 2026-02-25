import { useState } from "react";
import homebg from "../../../assets/images/homebg.png";
import Button from "../../../components/common/Button";
import leftArrow from "../../../assets/images/leftArrow.png";
import rightArrow from "../../../assets/images/rightArrow.png";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "منتجات حصرية",
    description:
      "في Sportify تجد وجهتك الأولى للأناقة الرياضية.. تميّز الآن بمنتجات فريدة لا تتكرر، صُممت لتمنحك حضورًا يُلاحظ… وثقة لا تُضاهى.",
    buttonText: "تسوق الآن",
  },
  {
    title: "عروض موسمية",
    description:
      "استفد من خصومات استثنائية على كل ما تحتاجه لتبدأ، لتستمر، ولتتقدّم بثقة في نشاطك الرياضي. هذه فرصتك لتختار الأفضل… بقيمة أفضل.",
    buttonText: "تسوق الآن",
  },
];

export default function HeroSection() {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (newDirection) => {
    const newIndex =
      (index + newDirection + slides.length) % slides.length;
    setIndex([newIndex, newDirection]);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${homebg})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* content absolute bottom right */}
      <div className="absolute bottom-12 right-12 z-10 max-w-2xl text-white" dir="rtl">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {slides[index].title}
            </h1>

            <p className="mb-8 leading-relaxed text-lg">
              {slides[index].description}
            </p>

            <Button buttonName={slides[index].buttonText} buttonColor="white"/>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* arrows تبقى كما هي */}
      <motion.img
        src={leftArrow}
        onClick={() => paginate(-1)}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-8 cursor-pointer z-20"
      />

      <motion.img
        src={rightArrow}
        onClick={() => paginate(1)}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-8 cursor-pointer z-20"
      />
    </section>
  );
}
