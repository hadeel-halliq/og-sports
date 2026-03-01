import clothbg from "../../../assets/images/clothbg.png";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section
            className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{ backgroundImage: `url(${clothbg})` }}
        >
            {/* overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
            <div
                className="absolute bottom-12 right-12 z-10 max-w-2xl text-white"
                dir="rtl"
            >
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    منتجات حصرية    
                    </h1>

                    <motion.p
                        className="mb-8 leading-relaxed text-lg font-bold"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                    >
                        وجهتك الأولى للأناقة الرياضية الحصرية.. تميز الآن بمنتجات لا تتكرر.
                    </motion.p>
                </motion.div>
            </div>

        </section>
    )
}
