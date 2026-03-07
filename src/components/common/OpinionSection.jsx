import { useState } from "react";
import Button from "./Button";
import OpinionCard from "./OpinionCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function OpinionSection() {
  const opinions = [1, 2, 3, 4, 5];
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardWidth = 300; // عرض الكارد + الفراغ التقريبي

  const nextSlide = () => {
    if (currentIndex < opinions.length - 1) {
      setCurrentIndex((i) => i + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-12 pb-12" dir="rtl">
      {/* العنوان */}
      <div className="pb-8 flex justify-between">
        <h2 className="font-bold text-2xl">اراء العملاء</h2>
        <Button buttonName="أضف رأيك" />
      </div>

      <div className="relative">
        {/* سهم اليمين  */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(248,248,248,1)] shadow cursor-pointer"
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            className={currentIndex === 0 ? "text-gray-400" : "text-black"}
          />
        </button>

        {/* سهم اليسار  */}
        <button
          onClick={nextSlide}
          disabled={currentIndex === opinions.length - 1}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(248,248,248,1)] shadow cursor-pointer"
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={
              currentIndex === opinions.length - 1 ? "text-gray-400" : "text-black"
            }
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
            {opinions.map((_, index) => (
              <OpinionCard key={index} />
            ))}
          </div>
        </div>
      </div>

      {/* النقاط */}
      <div className="flex justify-center gap-2 mt-6">
        {opinions.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="w-3 h-3 rounded-full cursor-pointer"
            style={{
              backgroundColor:
                currentIndex === index
                  ? "rgba(109,109,109,1)"
                  : "rgba(217,217,217,1)",
            }}
          />
        ))}
      </div>
    </div>
  );
}