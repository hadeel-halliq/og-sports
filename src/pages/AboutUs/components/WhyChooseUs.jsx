// import yellowTishert from "../../../assets/images/yellowTishert.png";
// import shop from "../../../assets/images/shop.png";
// import run from "../../../assets/images/run.png";
// import streat from "../../../assets/images/streat.png";


// export default function WhyChooseUs() {
//   return (
//     <div className="flex flex-col md:flex md:flex-row md:items-center md:gap-40 lg:flex lg:items-start  container mx-auto px-12 mt-16 pb-20 relative">
//         <div className="relative block  md:hidden">
//           <img src={streat} alt="streat" className="absolute"/>
//           <img src={run} alt="run" className="absolute w-[110px] h-[210px] left-[-40px] top-[90px]"/>
//         </div>
   
//         <div className="pt-[400px] md:pt-0 text-center md:text-start" dir="rtl">
//             <h2 className="font-bold text-lg md:text-xl mb-6">لماذا نحن خيارك الأفضل ؟</h2>
//             <ul className="text-[#554242] text-sm md:text-lg">
//               <li className="mb-6">
//                 <p>جودة استثنائية : </p>
//                 <p>نستخدم خامات عالية الجودة تمنحك الراحة والمتانة </p>
//               </li>
//               <li className="mb-6">
//                 <p>حرية حركة كاملة : </p>
//                 <p>تصميم هندسي ينسجم مع طبيعة الجسم ليمنحك مرونة وانسيابية اثناء الأداء</p>
//               </li>
//               <li className="mb-6">
//                 <p>دعم مستمر : </p>
//                 <p>فريقنا هنا لخدمتك والأجابة على استفساراتك .</p>
//               </li>
//               <li className="mb-6">
//                 <p>تجربة تسوق سهلة : </p>
//                 <p>من التصفح حتى الإستلام ---- تجربة سلسلة بالكامل</p>
//               </li>
//             </ul>
//         </div>
//         <div className="relative hidden md:block w-[500px] h-[400px]">
//             <img src={yellowTishert} alt="yellowTishert" className="absolute md:w-[120px] md:top-[70px] md:left-[-80px] lg:w-[170px] lg:top-[100px] lg:left-[-110px] xl:top-24 xl:left-0"/>
//             <img src={shop} alt={shop} className="absolute md:w-[250px] lg:w-[350px]  xl:right-[35px]"/>
//         </div>
//     </div>
//   )
// }

import { motion } from "framer-motion";
import yellowTishert from "../../../assets/images/yellowTishert.png";
import shop from "../../../assets/images/shop.png";
import run from "../../../assets/images/run.png";
import streat from "../../../assets/images/streat.png";

export default function WhyChooseUs() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:gap-40 lg:items-start container mx-auto px-6 md:px-12 mt-6 md:mt-20 pb-20 relative overflow-x-hidden">
      
      {/* Mobile Images */}
      <div className="relative md:hidden h-[420px] overflow-hidden flex items-end justify-center">
        
        <motion.img
          src={streat}
          alt="streat"
          className="absolute bottom-0 w-[260px]"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.img
          src={run}
          alt="run"
          className="absolute bottom-0 left-1/4 -translate-x-1/2 w-[110px] h-[210px]"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        />

        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </div>

      {/* Text Section */}
      <div className="text-center md:text-start mt-6 md:mt-0" dir="rtl">
        <h2 className="font-bold text-lg md:text-2xl mb-6">
          لماذا نحن خيارك الأفضل ؟
        </h2>

        <ul className="text-[#554242] text-sm md:text-lg">
          <li className="mb-6">
            <p>جودة استثنائية :</p>
            <p>نستخدم خامات عالية الجودة تمنحك الراحة والمتانة</p>
          </li>

          <li className="mb-6">
            <p>حرية حركة كاملة :</p>
            <p>
              تصميم هندسي ينسجم مع طبيعة الجسم ليمنحك مرونة وانسيابية أثناء الأداء
            </p>
          </li>

          <li className="mb-6">
            <p>دعم مستمر :</p>
            <p>فريقنا هنا لخدمتك والإجابة على استفساراتك.</p>
          </li>

          <li className="mb-6">
            <p>تجربة تسوق سهلة :</p>
            <p>من التصفح حتى الاستلام — تجربة سلسة بالكامل</p>
          </li>
        </ul>
      </div>

      {/* Desktop Images */}
      <div className="relative hidden md:block w-[500px] h-[400px]">
        <motion.img
          src={yellowTishert}
          alt="yellowTishert"
          className="absolute md:w-[120px] md:top-[70px] md:left-[-80px] lg:w-[170px] lg:top-[100px] lg:left-[-110px] xl:top-24 xl:left-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.img
          src={shop}
          alt="shop"
          className="absolute md:w-[250px] lg:w-[350px] xl:right-[35px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}