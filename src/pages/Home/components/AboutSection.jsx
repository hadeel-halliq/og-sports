import { motion } from "framer-motion";
import aboutpic from "../../../assets/images/aboutpic.png";
import Button from "../../../components/common/Button";

const imageVariants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

export default function AboutSection() {
  return (
    <div className="bg-[rgba(248,248,248,1)] overflow-hidden">
      <div className="container mx-auto px-12 py-12 grid grid-cols-1 lg:grid-cols-2 gap-[-150px] place-items-center my-20">
        
        <motion.img
          src={aboutpic}
          alt="clothespic"
          className="w-[400px] h-[300px]"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        />

        <motion.div
          className="h-80 w-[500px] font-light"
          dir="rtl"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="my-6 lg:mb-6 font-bold text-xl">من نحن</h2>

          <p className="max-w-md mb-6 [word-spacing:3px]">
            سيورتفاي يقدم لكم تجربة تسوق رياضية متكاملة تجمع بين الأداء الاحترافي، الجودة العالية، والتصميم العصري — لنكون شريكك الحقيقي في كل تمرين، كل سباق، وكل تحدٍ جديد تخوضه.
          </p>

          <p className="mb-6 [word-spacing:3px]">
            منتجاتنا ليست مجرد ملابس أو معدات… بل أدوات أداء مصممة بعناية لتمنحك الثقة، الثبات، والراحة المطلقة أثناء الحركة.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <Button buttonName="تعرف علينا أكثر"    width="w-[170px]"/>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}