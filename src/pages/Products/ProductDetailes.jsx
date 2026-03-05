import { useParams } from "react-router-dom";
import { useState } from "react";
import mockProductsDetailes from "../../data/mockProductsDetailes";
import Button from "../../components/common/Button";

export default function ProductDetails() {
    const { id } = useParams();
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
            <h2 className="font-bold mb-5 text-xl">تفاصيل المنتج</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                {/* Image */}
                <div className="flex justify-center items-start">
                    <div className="bg-gray-100 rounded-xl p-6 w-96 sm:w-60 md:w-72">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-60 object-contain"
                        />
                    </div>
                </div>

                {/* Info */}
                <div>
                    <h1 className="text-2xl font-bold mb-4">
                        {product.title}
                    </h1>

                    <p className="text-gray-600 mb-4">
                        {product.description}
                    </p>

                    <p className="text-xl font-bold mb-6">
                        ${product.price}
                    </p>

                    {/* Sizes */}
                    <div className="mb-6">
                        <h3 className="font-semibold mb-2">المقاس</h3>
                        <div className="flex flex-wrap gap-3">
                            {product.sizes.map((size) => (
                                <label
                                    key={size}
                                    className="flex items-center gap-2 border px-3 py-1 rounded cursor-pointer"
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedSizes.includes(size)}
                                        onChange={() => toggleSize(size)}
                                    />
                                    {size}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Colors */}
                    <div className="mb-6">
                        <h3 className="font-semibold mb-2">اللون</h3>
                        <div className="flex flex-wrap gap-3">
                            {product.colors.map((color) => (
                                <label
                                    key={color}
                                    className="flex items-center gap-2 border px-3 py-1 rounded cursor-pointer"
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedColors.includes(color)}
                                        onChange={() => toggleColor(color)}
                                    />
                                    {color}
                                </label>
                            ))}
                        </div>
                    </div>
                    <Button buttonName="أضف إلى السلة" />
                </div>
            </div>
        </div>
    );
}