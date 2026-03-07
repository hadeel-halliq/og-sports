import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import opinionImg from "../../assets/images/opinionImg.png";

export default function OpinionCard() {
  return (
    <div className="min-w-[280px] sm:min-w-[320px] bg-[rgba(248,248,248,1)] px-4 py-4 rounded-lg">

      <div className="flex gap-4 items-center mb-4">
        <img src={opinionImg} alt="clientImage" className="w-16 h-16"/>
        <div>
          <h2 className="text-lg font-bold">محمد رامي</h2>
          <p className="text-sm text-[rgba(109,109,109,1)]">معلم رياضة</p>
        </div>
      </div>

      <div className="flex gap-1 text-xl mb-4">
        <FontAwesomeIcon icon={faStar} className="cursor-pointer"/>
        <FontAwesomeIcon icon={faStar} className="cursor-pointer"/>
        <FontAwesomeIcon icon={faStar} className="cursor-pointer"/>
        <FontAwesomeIcon icon={faStar} className="cursor-pointer"/>
        <FontAwesomeIcon icon={faStar} className="cursor-pointer"/>
      </div>

      <p className="text-sm text-[rgba(109,109,109,1)]">
        الحذاء كان رائعا ومريحا عند لبسه، وسعره مناسب جدا مع جودته،
        والشحن كان في الوقت المناسب.
      </p>

    </div>
  );
}