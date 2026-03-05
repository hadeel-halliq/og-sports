import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button";
import mockProductsDetailes from "../../../data/mockProductsDetailes";

export default function ProductsContent() {
  const navigate = useNavigate();

  // انميشن لكل كارد
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
    hover: { scale: 1.05, y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" },
  };

  return (
    <div>
      <div className="mb-6" dir="rtl">
        <h1 className="text-2xl font-bold">النساء (ملابس، أحذية)</h1>
      </div>

      {/* Search */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-5">
        <div className="flex items-center border rounded-lg px-4 py-2 w-full md:w-72 bg-white" dir="rtl">
          <input
            type="text"
            placeholder="بحث"
            className="outline-none w-full mr-2 h-5"
          />
        </div>
        <p className="text-center text-sm md:text-lg text-gray-500 mt-1">
          {mockProductsDetailes.length} نتيجة
        </p>
      </div>

      {/* Cards */}
      <div
        className="cursor-pointer grid  gap-14 grid-cols-1 justify-items-center lg:grid-cols-2 xl:grid-cols-3 "
        dir="rtl"
      >
        {mockProductsDetailes.map((product, index) => (
          <motion.div
            key={product.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            onClick={() => navigate(`/products/${product.id}`)}
            className="shadow-sm px-4 py-4 w-[260px] xl:w-[260px] bg-[rgba(248,248,248,1)] flex flex-col"
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
              <Button buttonName="أضف إلى السلة" width="w-full" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}