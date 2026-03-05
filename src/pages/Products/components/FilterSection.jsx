import { motion } from "framer-motion";
import FiltersSideBar from "./FiltersSideBar";
import ProductsContent from "./ProductsContent";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const leftVariant = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
    },
  },
};

const rightVariant = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
    },
  },
};

export default function FilterSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // عدد الصفحات مثال

  const goPrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] lg:grid-cols-[500px_1fr] xl:grid-cols-[790px_1fr] gap-24">
          
          <div
            className="order-1 md:order-2"
            
          >
            <FiltersSideBar />
          </div>

          <motion.div
            className="order-2 md:order-1"
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ProductsContent />
            
            {/* ========================= Pagination ========================= */}
            <div className="flex justify-center items-center gap-4 mt-10 text-gray-700">
              {/* سهم اليسار */}
              <button
                onClick={goPrev}
                disabled={currentPage === 1}
                className={`p-2 rounded cursor-pointer hover:bg-gray-200 transition ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <ChevronLeft size={20} />
              </button>

              {/* أرقام الصفحات */}
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 cursor-pointer flex items-center justify-center rounded-full 
                      ${page === currentPage ? "bg-black text-white" : "hover:bg-gray-200"}
                      transition
                    `}
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* سهم اليمين */}
              <button
                onClick={goNext}
                disabled={currentPage === totalPages}
                className={`p-2  cursor-pointer rounded hover:bg-gray-200 transition ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <ChevronRight size={20} />
              </button>
            </div>
            {/* ========================= End Pagination ========================= */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}