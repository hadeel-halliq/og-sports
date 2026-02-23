import { Link } from "react-router-dom";
import accessories from "../../../assets/images/accessories.png";
import equipment from "../../../assets/images/equipment.png";
import menproducts from "../../../assets/images/menproducts.png";
import news from "../../../assets/images/news.png";
import wholesaleunitsale from "../../../assets/images/wholesaleunitsale.png";
import womenproducts from "../../../assets/images/womenproducts.png";


const ShopCategory = [
    { label: "كل جديد", img: news, link: "" },
    { label: "العروض", img: accessories, link: "" },
    { label: "نساء", img: womenproducts, link: "" },
    { label: "رجال", img: menproducts, link: "" },
    { label: "معدات", img: equipment, link: "" },
    { label: "اكسسوارات", img: accessories, link: "" },
    { label: "مفرق وجملة", img: wholesaleunitsale, link: "" },
]
export default function ShopByCategory() {
    return (
        <div className="flex items-center justify-center mt-20">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">
            {ShopCategory.map((item, index) => 
                <Link key={index}  className="text-center" to={item.to}>
                    <img src={item.img} className="mx-auto w-20 h-20 object-contain"/>
                    <p className="mt-2">{item.label}</p>
                </Link>)}
        </div>
        </div>
    )
}
