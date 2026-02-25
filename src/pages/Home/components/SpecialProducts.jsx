import { useRef } from "react";
import { motion } from "framer-motion";
import rightArrow from "../../../assets/images/rightArrow.png";
import leftArrow from "../../../assets/images/leftArrow.png";
import tishert from "../../../assets/images/tishert.png";
import shoes from "../../../assets/images/shoes.png";
import SpecialProductCard from "./SpecialProductCard";
import Button from "../../../components/common/Button";

const cardsData = [
  {
    imgSrc: tishert,
    productName: "حذاء رياضي (Nike)",
    productDescription: "حذاء رياضي لماركة عالمية, يساعدك على المشى بأريحية فائقة ويعتبر من الأحذية الطبية التي يتم وضفها من قبل الأطباء",
    dollarPrice: "$35",
    syrianPrice: "350.000 ل.س",
  },
  {
    imgSrc: shoes,
    productName: "حذاء رياضي (Nike)",
    productDescription: "حذاء رياضي لماركة عالمية, يساعدك على المشى بأريحية فائقة ويعتبر من الأحذية الطبية التي يتم وضفها من قبل الأطباء",
    dollarPrice: "$35",
    syrianPrice: "350.000 ل.س",
  },
  {
    imgSrc: shoes,
    productName: "حذاء رياضي (Nike)",
    productDescription: "حذاء رياضي لماركة عالمية, يساعدك على المشى بأريحية فائقة ويعتبر من الأحذية الطبية التي يتم وضفها من قبل الأطباء",
    dollarPrice: "$35",
    syrianPrice: "350.000 ل.س",
  },
  {
    imgSrc: shoes,
    productName: "حذاء رياضي (Nike)",
    productDescription: "حذاء رياضي لماركة عالمية, يساعدك على المشى بأريحية فائقة ويعتبر من الأحذية الطبية التي يتم وضفها من قبل الأطباء",
    dollarPrice: "$35",
    syrianPrice: "350.000 ل.س",
  },
  {
    imgSrc: shoes,
    productName: "حذاء رياضي (Nike)",
    productDescription: "حذاء رياضي لماركة عالمية, يساعدك على المشى بأريحية فائقة ويعتبر من الأحذية الطبية التي يتم وضفها من قبل الأطباء",
    dollarPrice: "$35",
    syrianPrice: "350.000 ل.س",
  },
  {
    imgSrc: shoes,
    productName: "حذاء رياضي (Nike)",
    productDescription: "حذاء رياضي لماركة عالمية, يساعدك على المشى بأريحية فائقة ويعتبر من الأحذية الطبية التي يتم وضفها من قبل الأطباء",
    dollarPrice: "$35",
    syrianPrice: "350.000 ل.س",
  },
  {
    imgSrc: shoes,
    productName: "حذاء رياضي (Nike)",
    productDescription: "حذاء رياضي لماركة عالمية, يساعدك على المشى بأريحية فائقة ويعتبر من الأحذية الطبية التي يتم وضفها من قبل الأطباء",
    dollarPrice: "$35",
    syrianPrice: "350.000 ل.س",
  },

];

export default function SpecialProducts() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="container relative mx-auto px-12 pb-12 overflow-hidden">
      <div className="relative py-8 px-4">
        <h2 className="font-bold text-2xl pb-8 text-right" dir="rtl">المنتجات المميزة</h2>

        <div className="relative group">
          {/* سهم اليسار */}
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll("left")}
            className="absolute left-[-40px] top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-md hidden md:block"
          >
            <img src={leftArrow} className="w-8 cursor-pointer" alt="left" />
          </motion.button>

          <div
            ref={sliderRef}
            className="flex overflow-x-auto scrollbar-hide gap-6 px-4 py-10"
            style={{
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none" // إخفاء السكرول بار في فايرفوكس
            }}
          >
            {cardsData.map((card, index) => (
              <motion.div
                key={index}
                style={{ scrollSnapAlign: "start" }}
                layout // هذا يجعل العناصر تتحرك بسلاسة عند تغيير أماكنها
              >
                <SpecialProductCard {...card} />
              </motion.div>
            ))}
          </div>

          {/* سهم اليمين */}
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll("right")}
            className="absolute right-[-40px] top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-md hidden md:block"
          >
            <img src={rightArrow} className="w-8 cursor-pointer" alt="right" />
          </motion.button>
        </div>

        <div className="flex justify-end mt-10">
          <Button buttonName="عرض المزيد" />
        </div>
      </div>
    </div>
  );
}
