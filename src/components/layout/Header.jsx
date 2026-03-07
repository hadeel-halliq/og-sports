import NavBar from "./NavBar"
import whiteLogo from "../../assets/images/whiteLogo.png"
import blackLogo from "../../assets/images/blacLogo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faSistrix } from "@fortawesome/free-brands-svg-icons";
import { useLocation } from "react-router-dom";


export default function Header() {
  const { pathname } = useLocation();
  const isDarkHeader = pathname === "/cart" || pathname === "/notifications" || pathname.startsWith("/products/");
  const headerBg = isDarkHeader
    ? "bg-[linear-gradient(90deg,rgba(18,18,18,0)_0%,#121212_6%,#121212_94%,rgba(18,18,18,0)_100%)]"
    : "bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,#FFFFFF_6%,#FFFFFF_94%,rgba(255,255,255,0)_100%)]";
  const logo = isDarkHeader ? whiteLogo : blackLogo;
  const iconStyle = `text-xl ${isDarkHeader ? "text-primary" : "text-secondary"
    }`;

  return (
    <div className={`${headerBg} fixed top-4 left-0 w-full h-[80px] z-50`}>
      <div className="container mx-auto  px-12 flex justify-between ">
        <div className="flex gap-2 lg:gap-16 items-center">
          <div className="flex gap-3 items-center cursor-pointer">
            <FontAwesomeIcon icon={faUser} className={iconStyle} />
            <FontAwesomeIcon icon={faBagShopping} className={iconStyle} />
            <FontAwesomeIcon icon={faSistrix} className={iconStyle} />
          </div>
          <NavBar />
        </div>
        <img src={logo} alt="logo" className="w-20" />
      </div>
    </div>
  )
}


