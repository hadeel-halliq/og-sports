import NavBar from "./NavBar"
import cart from "../../assets/images/cart.png";
import notification from "../../assets/images/notification.png";
import profilePic from "../../assets/images/profilePic.png";
import whiteLogo from "../../assets/images/whiteLogo.png"
import blackLogo from "../../assets/images/blackLogo.png"
import { useLocation } from "react-router-dom";


export default function Header() {
  const { pathname } = useLocation();
  const isDarkHeader = pathname === "/cart" || pathname === "/notifications";
  const headerBg = isDarkHeader ? "bg-secondary" : "bg-primary";
  const logo = isDarkHeader ? whiteLogo : blackLogo;
  const iconStyle = "w-9 h-9";
  return (
    <div className={`${headerBg}`}>
      <div className="container mx-auto py-4 px-12 flex justify-between ">
        <div className="flex gap-16 items-center">
          <div className="flex gap-3 items-center">
            <img src={profilePic} alt="profilePic" className="w-12 " />
            <img src={cart} alt="cartIcon" className={iconStyle} />
            <img src={notification} alt="notifictionIcon" className={iconStyle} />
          </div>
          <NavBar />
        </div>
        <img src={logo} alt="logo" className="w-30" />
      </div>
  </div>

  )
}
