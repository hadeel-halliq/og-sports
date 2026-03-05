import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../../components/common/Button";
import leftArrow from "../../../assets/images/leftArrow.png";
import rightArrow from "../../../assets/images/rightArrow.png";
import man from "../../../assets/images/man.png";
import dam from "../../../assets/images/dam.png";


const slides = [
  {
    title: "منتجات حصرية",
    description:
      "استفد من خصومات استثنائية على كل ما تحتاجه لتبدأ، ولتتقدّم بثقة في نشاطك الرياضي.",
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
      x: direction > 0 ? 56 : -56,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -56 : 56,
      opacity: 0,
    }),
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 bg-secondary 
        [clip-path:ellipse(100%_100%_at_50%_0%)]"></div>
      

      <div className="relative container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 min-h-[640px] sm:min-h-[720px] lg:min-h-screen">
        {/* big title */}
        <h1
          className="pointer-events-none select-none absolute left-1/2 top-[34%] sm:top-[38%] lg:top-[40%]
          -translate-x-1/2 -translate-y-1/2
          text-[clamp(64px,14vw,300px)]
          text-transparent opacity-90
          [-webkit-text-stroke:3px_#fff]"
        >
          OG_Sports
        </h1>

        {/* hero images */}
        <img
          src={man}
          alt=""
          className="pointer-events-none absolute -left-14 sm:left-0 lg:left-6 top-20 sm:top-16 lg:top-20
          w-[280px] sm:w-[360px] lg:w-[560px] max-w-none object-contain z-10"
          draggable={false}
        />
        <img
          src={dam}
          alt=""
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-36 sm:bottom-32 lg:bottom-36
          w-[80px] sm:w-[110px] lg:w-[150px] object-contain z-10"
          draggable={false}
        />

        {/* content */}
        <div
          className="absolute bottom-20 sm:bottom-24 lg:bottom-24 inset-x-4 sm:inset-x-auto sm:right-6 lg:right-12
          w-[calc(100%-2rem)] sm:w-[520px] lg:w-[640px] text-white z-20"
          dir="rtl"
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 text-center sm:text-right">
                {slides[index].title}
              </h2>
              <p className="mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base lg:text-sm text-center sm:text-right">
                {slides[index].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center sm:justify-end">
            <Button
              buttonName={slides[index].buttonText}
              buttonColor="white"
              width="w-[110px]"
            />
          </div>
        </div>

        {/* arrows */}
        <motion.button
          type="button"
          aria-label="السابق"
          onClick={() => paginate(-1)}
          className="absolute left-3 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30"
          whileTap={{ scale: 0.96 }}
        >
          <img
            src={leftArrow}
            alt=""
            className="w-10 sm:w-11 lg:w-12"
            draggable={false}
          />
        </motion.button>

        <motion.button
          type="button"
          aria-label="التالي"
          onClick={() => paginate(1)}
          className="absolute right-3 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-30"
          whileTap={{ scale: 0.96 }}
        >
          <img
            src={rightArrow}
            alt=""
            className="w-10 sm:w-11 lg:w-12"
            draggable={false}
          />
        </motion.button>

        {/* dots */}
        <div className="absolute bottom-6 sm:bottom-7 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`انتقل إلى الشريحة ${i + 1}`}
              onClick={() => setIndex([i, i > index ? 1 : -1])}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === index ? "bg-primary" : "bg-primary/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}





 