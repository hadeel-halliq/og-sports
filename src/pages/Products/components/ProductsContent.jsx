import { Search } from "lucide-react";
import shoes from "../../../assets/images/shoes.png";
import Button from "../../../components/common/Button";

const products = [
  {
    id: 1,
    title: "حذاء رياضي (Nike)",
    description: "حذاء رياضي مريح بتصميم أنيق",
    image: shoes,
    price: 35,
  },
  {
    id: 2,
    title: "حذاء رياضي (Nike)",
    description: "حذاء رياضي مريح بتصميم أنيق",
    image: shoes,
    price: 20
  },
  {
    id: 3,
    title: "حذاء رياضي (Nike)",
    description: "حذاء رياضي مريح بتصميم أنيق",
    image: shoes,
    price: 30
  },
  {
    id: 4,
    title: "حذاء رياضي (Nike)",
    description: "حذاء رياضي مريح بتصميم أنيق",
    image: shoes,
    price: 25
  },
  {
    id: 5,
    title: "حذاء رياضي (Nike)",
    description: "حذاء رياضي مريح بتصميم أنيق",
    image: shoes,
    price: 50
  },
  {
    id: 6,
    title: "حذاء رياضي (Nike)",
    description: "حذاء رياضي مريح بتصميم أنيق",
    image: shoes,
    price: 40
  },
];

export default function ProductsContent() {
  return (
    <div>     
      <div className="mb-6" dir="rtl">
        <h1 className="text-2xl font-bold">
          النساء (ملابس، أحذية)
        </h1>
      </div>

      {/* Search */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-5">
        <div className="flex items-center border rounded-lg px-4 py-2 w-full md:w-72 bg-white" dir="rtl">
          <Search size={18} />
          <input
            type="text"
            placeholder="بحث"
            className="outline-none w-full mr-2 h-5"

          />
        </div>
        <p className="text-center text-sm md:text-lg text-gray-500 mt-1">
          45 نتيجة
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" dir="rtl">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition 
             w-[60%] mx-auto 
             md:w-full"
          >
            <div className="h-48 bg-gray-100 mb-4 rounded-lg" >
              <img src={product.image} alt="" />
            </div>
            <h3 className="font-semibold text-sm mb-2">{product.title}</h3>
            <p className="text-xs text-gray-500 mb-2">{product.description}</p>
            <div className="flex flex-col justify-between items-start">
              <span className="font-bold">${product.price}</span>
              <Button buttonName="أضف للسلة"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}