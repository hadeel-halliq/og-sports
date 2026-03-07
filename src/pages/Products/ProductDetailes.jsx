import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import mockProductsDetailes from "../../data/mockProductsDetailes";
import mockProductsallcloth from "../../data/mockProductsallcloth";
import Button from "../../components/common/Button";

export default function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = mockProductsDetailes.find(
        (p) => p.id === Number(id)
    );

    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);

    if (!product) {
        return <div className="p-10 text-center">المنتج غير موجود</div>;
    }

    const toggleSize = (size) => {
        setSelectedSizes((prev) =>
            prev.includes(size)
                ? prev.filter((s) => s !== size)
                : [...prev, size]
        );
    };

    const toggleColor = (color) => {
        setSelectedColors((prev) =>
            prev.includes(color)
                ? prev.filter((c) => c !== color)
                : [...prev, color]
        );
    };

    return (
        <div className="container mx-auto px-12 py-10 mt-[80px]" dir="rtl">
            {/* تفاصيل المنتج */}
            <h2 className="font-bold text-2xl mb-5 ">تفاصيل المنتج</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Image */}

                <div className="flex flex-col items-center">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-[360px] sm:w-[400px] h-[300px] object-cover mb-4"
                    />

                    <div className="flex gap-1 max-[415px]:min-[376px]:gap-5 justify-between">
                        {Array(3).fill(product.image).map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`${product.title}-${index}`}
                                className="w-[90px] h-[86px]  sm:w-[130px] sm:h-[120px]  object-cover rounded"
                            />
                        ))}
                    </div>
                </div>

                {/* Info */}
                <div>
                    <h1 className="text-2xl font-bold mb-6">
                        {product.title}
                    </h1>

                    <p className="text-gray-600 mb-6">
                        {product.description}
                    </p>

                    <div className="flex gap-6 mb-6">
                        <div className="flex gap-0.5 text-xl cursor-pointer">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <p className="text-[10px] sm:text-sm">مع 12 رأي من العملاء</p>
                    </div>
                    <div>

                        <p className="text-2xl font-bold mb-6">
                            ${product.price}
                        </p>
                    </div>

                    {/* Colors */}
                    <div className="mb-6">
                        <h3 className="font-semibold mb-2">اللون</h3>

                        <div className="flex flex-wrap gap-3">
                            {product.colors.map((color) => (
                                <label key={color} className="cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="hidden"
                                        checked={selectedColors.includes(color)}
                                        onChange={() => toggleColor(color)}
                                    />

                                    <div
                                        className={`w-8 h-8 rounded-full border-2
                                            ${selectedColors.includes(color)
                                                ? "border-black scale-110"
                                                : "border-gray-300"
                                            }`}
                                        style={{ backgroundColor: color }}
                                    ></div>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Sizes */}
                    <div className="mb-6">
                        <h3 className="font-semibold mb-2">المقاس</h3>
                        <div className="flex flex-wrap gap-3">
                            {product.sizes.map((size) => (
                                <label key={size} className="cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="hidden"
                                        checked={selectedSizes.includes(size)}
                                        onChange={() => toggleSize(size)}
                                    />

                                    <div
                                        className={`w-12 h-12 flex items-center justify-center border rounded-md text-sm font-medium
                                            ${selectedSizes.includes(size)
                                                ? "bg-[rgba(109,109,109,1)] text-white border-gray-900"
                                                : "bg-white text-gray-700 border-gray-300"
                                            }`}
                                    >
                                        {size}
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>
                    <Button buttonName="أضف إلى السلة" width="w-full" onClick={() => navigate("/cart")} />
                </div>
            </div>


            {/* أكمل الطقم */}
            <h2 className="font-bold text-2xl mt-20 mb-5">أكمل الطقم</h2>
            {/* Cards */}
            <div
                className="cursor-pointer grid  gap-14 grid-cols-1 justify-items-center lg:grid-cols-3 xl:grid-cols-4 "
                dir="rtl"
            >
                {mockProductsallcloth.map((product, index) => (
                    <div
                        key={product.id}
                        custom={index}
                        className="shadow-sm px-3 py-3 w-[260px] xl:w-[280px] bg-[rgba(248,248,248,1)] flex flex-col"
                    >
                        {/* صورة الكارد */}

                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full object-contain"
                        />
                        {/* search for: aspect-ratio-square */}

                        {/* عنوان ووصف */}
                        <h3 className="font-[400px] text-lg my-4">{product.title}</h3>
                        <p className="text-xs  text-gray-500 mb-4">{product.description}</p>

                        {/* السعر وزر الإضافة */}
                        <div className="flex flex-col justify-between items-start mt-auto">
                            <div className="flex items-center gap-4 mb-2">
                                <p className="font-bold text-[24px] text-center">${product.price}</p>
                                <p className="text-sm text-[rgba(109,109,109,1)] text-center">{product.syprice}</p>
                            </div>
                            <Button buttonName="أضف إلى السلة" width="w-full" onClick={() => navigate("/cart")} />
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}