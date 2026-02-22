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

  return (
    <div className={`${headerBg} flex justify-between`}>
      <div>
        <img src={profilePic} alt="profilePic" />
        <img src={cart} alt="cartIcon" />
        <img src={notification} alt="notifictionIcon" />
      </div>
      <NavBar />
      <img src={logo} alt="logo" />
    </div>
  )
}
