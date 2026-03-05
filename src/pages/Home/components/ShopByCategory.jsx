import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import accessories from "../../../assets/images/accessories.png";
import equipment from "../../../assets/images/equipment.png";
import menproducts from "../../../assets/images/menproducts.png";
import news from "../../../assets/images/news.png";
import wholesaleunitsale from "../../../assets/images/wholesaleunitsale.png";
import womenproducts from "../../../assets/images/womenproducts.png";

const ShopCategory = [
  { label: "كل جديد", img: news, link: "" },
  { label: "العروض", img: accessories, link: "" },
  { label: "نساء", img: womenproducts, link: "" },
  { label: "رجال", img: menproducts, link: "" },
  { label: "معدات", img: equipment, link: "" },
  { label: "اكسسوارات", img: accessories, link: "" },
  { label: "مفرق وجملة", img: wholesaleunitsale, link: "" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function ShopByCategory() {
  return (
    <div className="flex items-center justify-center mt-20 mb-20">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {ShopCategory.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Link className="text-center block" to={item.link}>
              <motion.img
                src={item.img}
                className="mx-auto w-20 h-20 object-contain"
                whileHover={{
                  scale: 1.1,
                  rotate: 3,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <p className="mt-2">{item.label}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}