import whiteLogo from "../../assets/images/whiteLogo.png"
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import pinterest from "../../assets/images/pinterest.png";
import FooterList from "./FooterList";

const contactItems = [
  {
    icon: facebook,
    label: "تواصل على فيسبوك",
    href: "",
    external: true,
  },
  {
    icon: instagram,
    label: "تواصل على انستغرام",
    href: "",
    external: true
  },
  {
    icon: pinterest,
    label: "تواصل على بينتريست",
    href: "",
    external: true,
  },
];

const quickLinks = [
  { label: "الرئيسية", href: "/", external: false },
  { label: "من نحن", href: "/about", external: false },
  { label: "المنتجات", href: "/products", external: false },
  { label: "اتصل بنا", href: "/contact", external: false },
];

const services = [
  { label: "تجهيز الفرق والأكاديميات : " },
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
        <div className="pt-5 flex flex-col gap-6 items-center sm:flex sm:flex-row-reverse sm:items-center justify-between">
          <div className="hidden  md:flex flex-col items-center gap-3 p-2.5">
            <img
              src={whiteLogo}
              className="w-[80px]  lg:w-[120px] rounded"
            />

          </div>
          {footerSections.map((section, index) => (
            <FooterList key={index} title={section.title} items={section.items} />
          ))}
        </div>
      </div>
      <div className="w-10/12 h-[1px] bg-white mt-6 mx-auto"></div>
      <p className="text-center text-primary mt-6 pb-6" dir="rtl">© 2026 متجر سبوتيفاي. حميع الحقوق محفوظة</p>
    </div>
  );
}