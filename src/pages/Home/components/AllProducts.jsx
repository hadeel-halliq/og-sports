import { useState } from "react";
import AllProductCard from "./AllProductCard";
import Button from "../../../components/common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import tishert from "../../../assets/images/tishert.png";
import shoes from "../../../assets/images/shoes.png";

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
];

export default function AllProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 340; // عرض الكارد + الفجوة تقريباً

  const nextSlide = () => {
    if (currentIndex < cardsData.length - 1) {
      setCurrentIndex(i => i + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(i => i - 1);
    }
  };

  return (
    <div className="container relative mx-auto px-4 sm:px-6 lg:px-12 pb-12" dir="rtl">
      <h2 className="font-bold text-2xl pb-8 text-right">جميع المنتجات</h2>

      <div className="relative">
        {/* سهم اليمين  */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(248,248,248,1)] shadow-md cursor-pointer`}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            className={currentIndex === 0 ? "text-gray-400" : "text-black"}
          />
        </button>

        {/* سهم اليسار  */}
        <button
          onClick={nextSlide}
          disabled={currentIndex === cardsData.length - 1}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(248,248,248,1)] shadow-md cursor-pointer`}
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={currentIndex === cardsData.length - 1 ? "text-gray-400" : "text-black"}
          />
        </button>

        {/* السلايدر */}
        <div className="overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-500"
            style={{
              transform: `translateX(${currentIndex * cardWidth}px)`,
            }}
          >
            {cardsData.map((card, index) => (
              <AllProductCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>

      {/* زر عرض المزيد */}
      <div className="flex justify-start mt-10">
        <Button buttonName="عرض المزيد" />
      </div>
    </div>
  );
}