import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import girl1 from "../../../assets/images/girl1.png";
import girl2 from "../../../assets/images/girl2.png";

export default function OurStory() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <div
      ref={sectionRef}
      className="container mx-auto px-12 py-8 grid grid-cols-1 md:grid-cols-2 items-center lg:items-start mt-20 relative"
    >
      {/* Images */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto w-[270px] h-[230px] md:w-[400px] md:h-[400px] relative"
      >
        <motion.img
          src={girl1}
          alt="girlpic"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="absolute w-[120px] right-[140px] md:w-40 md:left-1 lg:w-50 lg:top-0 lg:left-0"
        />

        <motion.img
          src={girl2}
          alt="girlpic"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="absolute w-[120px] left-[140px] md:w-40 md:left-[170px] md:top-8 lg:w-50 lg:bottom-[-20px] lg:left-[220px]"
        />

        {/* Gradient Overlay - فقط تحت md */}
        <div className="absolute bottom-0 left-0 w-full h-20 md:hidden bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </motion.div>

      {/* Text */}
      <motion.div
        dir="rtl"
        initial={{ opacity: 0, x: 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="font-bold text-xl lg:text-2xl mb-5">قصتنا</h2>

        <p className="md:text-sm lg:text-lg leading-[1.8]">
          في Sprtify، نؤمن أن كل حركة تصنع فرقًا. ولهذا صممنا علامتنا
          لتكون أكثر من مجرد متجر رياضي — بل شريكًا حقيقيًا في رحلتك نحو
          القوة والثقة. نقدم منتجات عالية الجودة تم اختيارها بعناية
          لتمنحك:
        </p>

        <ul className="md:text-sm text-lg leading-[1.8] list-disc pr-12 mt-4">
          <li>راحة فائقة أثناء الحركة</li>
          <li>مرونة طبيعية تدعم جسمك</li>
          <li>تصميم عصري يعكس أسلوبك</li>
          <li>أداء يدوم معك في كل تمرين</li>
        </ul>

        <p className="mt-4 md:text-sm text-lg leading-[1.8]">
          نحن نهتم بالتفاصيل الصغيرة التي تصنع الفرق الكبير.
        </p>
      </motion.div>
    </div>
  );
}