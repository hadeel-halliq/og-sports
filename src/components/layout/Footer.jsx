// import whiteLogo from "../../assets/images/whiteLogo.jpg"
// import facebook from "../../assets/images/facebook.png";
// import instagram from "../../assets/images/instagram.png";
// import pinterest from "../../assets/images/pinterest.png";
// import FooterList from "./FooterList";

// const contactItems = [
//   { title: "تواصل معنا" },
//   { title: "+963 999 999 999" },
//   { title: "support@storename.com"},
// ];

// const quickLinks = [
//   { label: "الرئيسية", href: "/", external: false },
//   { label: "من نحن", href: "/about", external: false },
//   { label: "المنتجات", href: "/products", external: false },
//   { label: "اتصل بنا", href: "/contact", external: false },
// ];

// const services = [
//   { label: "تجهيز الفرق والأكاديميات : " },
//   { label: "تميُّز حصري، جودة احترافية، وأسعار جملة منافسة" },
// ];


// const footerSections = [
//   { title: "روابط سريعة", items: quickLinks },
//   { title: "للتواصل معنا", items: contactItems },
//   { title: "", items: services },
// ];

// export default function Footer() {
//   return (
//     <div className="bg-secondary">
//       <div className="container mx-auto px-12 border-t border-t-primary">
//         <div className="pt-5 flex flex-col gap-6 sm:flex sm:flex-row-reverse sm:items-center md:items-start  justify-between">
//           <div className="flex flex-col items-center gap-3 p-2.5">
//             <img
//               src={whiteLogo}
//               className="w-[80px]  lg:w-[120px] rounded"
//             />

//           </div>
//           {footerSections.map((section, index) => (
//             <FooterList key={index} title={section.title} items={section.items} />
//           ))}
//         </div>
//       </div>
//       <div className="w-10/12 h-[1px] bg-white mt-6 mx-auto"></div>
//       <p className="text-center text-primary mt-6 pb-6" dir="rtl">© 2026 متجر سبوتيفاي. حميع الحقوق محفوظة</p>
//     </div>
//   );
// }

import whiteLogo from "../../assets/images/whiteLogo.png";
import FooterList from "./FooterList";

const contactItems = [
  { label: "تواصل معنا" },
  { label: "+963 999 999 999" },
  { label: "support@storename.com" },
];

const quickLinks = [
  { label: "الرئيسية", href: "/", external: false },
  { label: "من نحن", href: "/about", external: false },
  { label: "المنتجات", href: "/products", external: false },
  { label: "اتصل بنا", href: "/contact", external: false },
];

const services = [
  { label: "تجهيز الفرق والأكاديميات :" },
  { label: "تميُّز حصري، جودة احترافية، وأسعار جملة منافسة" },
];

const footerSections = [
  { title: "روابط سريعة", items: quickLinks },
  { title: "للتواصل معنا", items: contactItems },
  { title: "", items: services },
];

export default function Footer() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-12 border-t border-t-primary">
        <div className="pt-5 flex flex-col gap-6 sm:flex-row-reverse sm:items-center md:items-start justify-between">

          <div className="flex flex-col items-center gap-3 p-2.5">
            <img
              src={whiteLogo}
              className="w-[80px] lg:w-[120px] rounded"
              alt="logo"
            />
          </div>

          {footerSections.map((section, index) => (
            <FooterList
              key={index}
              title={section.title}
              items={section.items}
            />
          ))}

        </div>
      </div>

      <div className="w-10/12 h-[1px] bg-white mt-6 mx-auto"></div>

      <p className="text-center text-primary mt-6 pb-6" dir="rtl">
        © 2026 متجر سبوتيفاي. جميع الحقوق محفوظة
      </p>
    </div>
  );
}