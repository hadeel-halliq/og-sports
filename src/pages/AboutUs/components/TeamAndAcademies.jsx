// import Team from "../../../assets/images/Team.png";
// import Button from "../../../components/common/Button";

// export default function TeamAndAcademies() {
//     return (
//         <div className="container mx-auto px-12  grid grid-cols-1 md:grid-cols-2 items-center lg:items-start mt-20 relative">
//             <img src={Team} alt="team" className="mx-auto w-[300px] md:w-[500px]" />
//             <div className="text-center md:text-start mt-6 md:mt-0" dir="rtl">
//                 <h2 className="font-bold text-lg md:text-2xl mb-10">تجهيز  الفرق والأكادميات</h2>
//                 <p className="text-sm md:text-[16px] lg:text-lg mb-10">في Sprtify، لا نخدم الأفراد فقط،
//                     بل نوفر تجهيز الفرق الرياضية والأكاديميات بكميات مناسبة من منتجاتنا المختارة بعناية، بجودة ثابتة وتصاميم عملية تناسب مختلف الأنشطة الرياضية.
//                 </p>
//                 <p className="text-sm md:text-[16px] lg:text-lg mb-10">
//                     ومع عروض خاصة للطلبات الجماعية، يحصل فريقك على قيمة أفضل كلما زادت الكمية — بتنظيم سهل وإجراءات واضحة تضمن تجربة شراء مريحة واحترافية من البداية حتى الاستلام.
//                 </p>
//                 <Button buttonName="احصل على عرض خاص لفريقك" />
//             </div>
//         </div>
//     )
// }


import Team from "../../../assets/images/Team.png";
import Button from "../../../components/common/Button";
import { motion } from "framer-motion";

export default function TeamAndAcademies() {
  return (
    <div className="container mx-auto px-12 grid grid-cols-1 md:grid-cols-2 items-center lg:items-start mt-20 relative">
      
      {/* صورة الفريق */}
      <motion.img
        src={Team}
        alt="team"
        className="mx-auto w-[300px] md:w-[500px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* النصوص */}
      <motion.div
        className="text-center md:text-start mt-6 md:mt-0"
        dir="rtl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2, // هذا يجعل كل عنصر يظهر بالتتابع
            },
          },
        }}
      >
        <motion.h2
          className="font-bold text-lg md:text-2xl mb-10"
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          تجهيز الفرق والأكادميات
        </motion.h2>

        <motion.p
          className="text-sm md:text-[16px] lg:text-lg mb-10"
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          في Sprtify، لا نخدم الأفراد فقط، بل نوفر تجهيز الفرق الرياضية والأكاديميات بكميات مناسبة من منتجاتنا المختارة بعناية، بجودة ثابتة وتصاميم عملية تناسب مختلف الأنشطة الرياضية.
        </motion.p>

        <motion.p
          className="text-sm md:text-[16px] lg:text-lg mb-10"
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          ومع عروض خاصة للطلبات الجماعية، يحصل فريقك على قيمة أفضل كلما زادت الكمية — بتنظيم سهل وإجراءات واضحة تضمن تجربة شراء مريحة واحترافية من البداية حتى الاستلام.
        </motion.p>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Button buttonName="احصل على عرض خاص لفريقك" />
        </motion.div>
      </motion.div>
    </div>
  );
}