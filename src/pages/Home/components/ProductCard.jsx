import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../../../components/common/Button";

export default function ProductCard({ imgSrc, productName, productDescription, dollarPrice, syrianPrice }) {
  const navigate = useNavigate();

  return (
    <motion.div
      // أنميشن عند ظهور الكارد لأول مرة
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      // أنميشن عند تمرير الماوس (Hover)
      whileHover={{ 
        y: -10, 
        transition: { duration: 0.3 } 
      }}
      className="w-[300px] flex items-start justify-center flex-col p-4 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300"
      dir="rtl"
    >
      <div className="overflow-hidden rounded-xl mb-4">
        <motion.img 
          src={imgSrc} 
          alt={productName} 
          className="h-[300px] w-[300px] object-cover"
          whileHover={{ scale: 1.1 }} // تكبير الصورة داخل الكارد عند الهوفير
          transition={{ duration: 0.5 }}
        />
      </div>
      
      <h2 className="mb-4 text-lg font-bold">{productName}</h2>
      <p className="text-[rgba(109,109,109,1)] text-sm  mb-4 h-[60px] line-clamp-3">
        {productDescription}
      </p>
      
      <div className="flex items-center gap-3 pb-4">
        <p className="font-bold text-xl">{dollarPrice}</p>
        <p className="text-sm text-[rgba(109,109,109,1)]">{syrianPrice}</p>
      </div>
      
      <Button 
        className="w-full" 
        buttonName="أضف إلى السلة" 
        onClick={() => navigate("/cart")}
      />
    </motion.div>
  );
}