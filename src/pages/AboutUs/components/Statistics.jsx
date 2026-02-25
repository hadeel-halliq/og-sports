import StatisticCard from "./StatisticCard";
import clothes from "../../../assets/images/clothes.png";
import quality from "../../../assets/images/quality.png";
import clients from "../../../assets/images/clients.png";
import city from "../../../assets/images/city.png";


export default function Statistics() {
  return (
    <div className="bg-[rgba(248,248,248,1)]">
      <div className="container mx-auto px-12 py-12">
        <div className="flex flex-col gap-16 md:flex md:flex-row items-center justify-evenly">
          <StatisticCard img={clients} number="+10,000" discraption="عميل وفريق"/>
          <StatisticCard img={clothes} number="+500" discraption="منتج متنوع"/>
          <StatisticCard img={quality} number="%100" discraption="جودة مضمونة"/>
          <StatisticCard img={city} number="+50" discraption="مدينة يتم الشحن إليها"/>
        </div>
      </div>
    </div>
  )
}

