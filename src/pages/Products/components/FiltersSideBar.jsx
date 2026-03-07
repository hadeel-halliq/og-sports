import { useState } from "react";

export default function FiltersSideBar() {
  // =========================
  // القيم الثابتة للأسعار
  // =========================
  const min = 15; // الحد الأدنى للسعر بالدولار
  const max = 90; // الحد الأعلى للسعر بالدولار
  const exchangeRate = 11000; // سعر الصرف لتقريب السعر بالليرة السورية

  // =========================
  // state لكل فلتر
  // =========================
  const [minPrice, setMinPrice] = useState(min); // الحد الأدنى للسعر المحدد
  const [maxPrice, setMaxPrice] = useState(max); // الحد الأعلى للسعر المحدد
  const [selectedSizes, setSelectedSizes] = useState([]); // أحجام مختارة
  const [selectedCategories, setSelectedCategories] = useState([]); // فئات مختارة
  const [selectedColors, setSelectedColors] = useState([]); // ألوان مختارة
  const [selectedBrands, setSelectedBrands] = useState([]); // ماركات مختارة

  // =========================
  // دوال لتبديل التحديد عند الضغط على checkbox
  // =========================
  const toggleItem = (item, array, setArray) => {
    // إذا موجود بالفعل → نحذفه، إذا مش موجود → نضيفه
    if (array.includes(item)) {
      setArray(array.filter((i) => i !== item));
    } else {
      setArray([...array, item]);
    }
  };

  const toggleBrand = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  // =========================
  // حساب النسب المئوية للخط الأسود بين الحدين في slider السعر
  // =========================
  const minPercent = ((minPrice - min) / (max - min)) * 100;
  const maxPercent = ((maxPrice - min) / (max - min)) * 100;

  return (
    <div className="bg-[rgba(248,248,248,1)] rounded-sm p-6 space-y-8 md:sticky md:top-24 h-fit shadow-sm">

      {/* =========================
          عنوان السايدبار
      ========================= */}
      <h2 className="text-lg font-bold" dir="rtl">الفلتر</h2>

      {/* =========================
          فلتر السعر
      ========================= */}
      <div>
        <h3 className="font-semibold mb-8" dir="rtl">السعر</h3>

        {/* سلايدر السعر */}
        <div className="relative h-10">

          {/* الخط الخلفي للرينج */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full h-1 bg-gray-300 rounded-full" />

          {/* الخط الأسود بين الحدين المحددين */}
          <div
            className="absolute top-1/2 -translate-y-1/2 h-[1px] bg-black rounded-full"
            style={{
              left: `${minPercent}%`,
              width: `${maxPercent - minPercent}%`,
            }}
          />

          {/* الحد الأدنى */}
          <input
            type="range"
            min={min}
            max={max}
            value={minPrice}
            onChange={(e) =>
              setMinPrice(Math.min(Number(e.target.value), maxPrice - 1))
            }
            className="absolute w-full appearance-none bg-transparent pointer-events-none z-10"
          />

          {/* الحد الأعلى */}
          <input
            type="range"
            min={min}
            max={max}
            value={maxPrice}
            onChange={(e) =>
              setMaxPrice(Math.max(Number(e.target.value), minPrice + 1))
            }
            className="absolute w-full appearance-none bg-transparent pointer-events-none z-20"
          />
        </div>

        {/* عرض السعر بالدولار والليرة */}
        <div className="flex justify-between mt-6 text-sm">
          <div className="text-start">
            <span className="block font-bold text-xl">${minPrice}</span>
            <span className="block text-gray-500 text-xs" dir="rtl">
              {(minPrice * exchangeRate).toLocaleString()} ل.س
            </span>
          </div>

          <div className="text-end">
            <span className="block font-bold text-xl">${maxPrice}</span>
            <span className="block text-gray-500 text-xs" dir="rtl">
              {(maxPrice * exchangeRate).toLocaleString()} ل.س
            </span>
          </div>
        </div>
      </div>

      {/* =========================
          فلتر المقاس
      ========================= */}
      <div>
        <h3 className="font-semibold mb-4" dir="rtl">المقاس</h3>

        <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm" dir="rtl">
          {["XS", "L", "S", "XL", "M", "XXL"].map((size) => (
            <label key={size} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedSizes.includes(size)}
                onChange={() =>
                  toggleItem(size, selectedSizes, setSelectedSizes)
                }
                className="
                  w-5 h-5
                  appearance-none
                  bg-[rgba(217,217,217,1)]
                  rounded-sm
                  cursor-pointer
                  relative
                  transition-all duration-200
                  checked:bg-black

                  after:content-['']
                  after:absolute
                  after:inset-0
                  after:flex
                  after:items-center
                  after:justify-center
                  after:scale-0
                  after:transition-transform
                  after:duration-200

                  checked:after:scale-100
                "
                style={{
                  backgroundImage: selectedSizes.includes(size)
                    ? `url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 13l4 4L19 7'/%3E%3C/svg%3E")`
                    : "none",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "14px",
                }}
              />
              <span>{size}</span>
            </label>
          ))}
        </div>
      </div>

      {/* =========================
          فلتر الفئة
      ========================= */}
      <div>
        <h3 className="font-semibold mb-4" dir="rtl">الفئة</h3>

        <div className="grid grid-cols-2 gap-y-3 gap-x-6 md:text-sm lg:text-xs" dir="rtl">
          {[
            "كل جديد",
            "العروض",
            "فرق وجملة",
            "نساء",
            "رجال",
            "معدات",
            "اكسسوارات",
          ].map((cat) => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() =>
                  toggleItem(cat, selectedCategories, setSelectedCategories)
                }
                className="
                  w-5 h-5
                  appearance-none
                  bg-[rgba(217,217,217,1)]
                  rounded-sm
                  cursor-pointer
                  transition-all duration-200
                  checked:bg-black
                "
                style={{
                  backgroundImage: selectedCategories.includes(cat)
                    ? `url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 13l4 4L19 7'/%3E%3C/svg%3E")`
                    : "none",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "14px",
                }}
              />
              <span>{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* =========================
          فلتر اللون
      ========================= */}
      <div>
        <h3 className="font-semibold mb-4" dir="rtl">اللون</h3>

        <div className="grid grid-cols-2 gap-4" dir="rtl">
          {[
            { name: "رمادي", class: "bg-gray-300" },
            { name: "أسود", class: "bg-black" },
            { name: "أحمر", class: "bg-red-500" },
            { name: "أزرق", class: "bg-blue-500" },
            { name: "أخضر", class: "bg-green-500" },
          ].map((color) => (
            <label key={color.name} className="flex items-center gap-3 cursor-pointer">

              {/* checkbox مخفي */}
              <input
                type="checkbox"
                checked={selectedColors.includes(color.name)}
                onChange={() =>
                  toggleItem(color.name, selectedColors, setSelectedColors)
                }
                className="peer hidden"
              />

              {/* المربع الملون */}
              <div
                className={`
                  relative w-5 h-5
                  ${color.class}
                  rounded-sm
                  transition-all duration-200
                  flex items-center justify-center
                  cursor-pointer

                  peer-checked:scale-105
                  peer-checked:brightness-110
                  peer-checked:shadow-md
                `}
              >
                <svg
                  className="
                    w-3 h-3
                    text-white
                    opacity-0
                    scale-0
                    transition-all duration-200
                    peer-checked:opacity-100
                    peer-checked:scale-100
                  "
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <span className="text-sm">{color.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* =========================
          فلتر الماركة
      ========================= */}
      <div>
        <h3 className="font-semibold mb-4 text-center">الماركة</h3>

        <div className="space-y-3 text-sm">
          {["Nike", "Adidas", "Puma", "Chanel", "Dior"].map((brand) => (
            <label
              key={brand}
              className="flex items-center justify-between cursor-pointer"
            >
              {/* checkbox يسار */}
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => toggleBrand(brand)}
                className="
                    w-5 h-5
                    appearance-none
                    bg-[rgba(217,217,217,1)]
                    rounded-sm
                    cursor-pointer
                    transition-all duration-200
                    checked:bg-black
                  "
                style={{
                  backgroundImage: selectedBrands.includes(brand)
                    ? `url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 13l4 4L19 7'/%3E%3C/svg%3E")`
                    : "none",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "14px",
                }}
              />

              {/* اسم الماركة بالنص */}
              <span className="flex-1 text-center">{brand}</span>

              {/* checkbox يمين */}
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => toggleBrand(brand)}
                className="
            w-5 h-5
            appearance-none
            bg-[rgba(217,217,217,1)]
            rounded-sm
            cursor-pointer
            transition-all duration-200
            checked:bg-black
          "
                style={{
                  backgroundImage: selectedBrands.includes(brand)
                    ? `url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 13l4 4L19 7'/%3E%3C/svg%3E")`
                    : "none",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "14px",
                }}
              />
            </label>
          ))}
        </div>
      </div>
      {/* =========================
          ستايل الرينج بدون CSS خارجي
      ========================= */}
      <style>
        {`
          input[type="range"] {
            pointer-events: none;
          }

          input[type="range"]::-webkit-slider-thumb {
            appearance: none;
            pointer-events: auto;
            width: 18px;
            height: 18px;
            background: black;
            border-radius: 9999px;
            cursor: pointer;
            margin-top: 9px; /* ينزل الدائرة لتحت */
          }

          input[type="range"]::-moz-range-thumb {
            pointer-events: auto;
            width: 18px;
            height: 18px;
            background: black;
            border-radius: 9999px;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}


