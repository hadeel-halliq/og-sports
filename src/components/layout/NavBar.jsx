import { ChevronDown, X, TextAlignJustify } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navItems = [
  { name: "اتصل بنا", to: "/contact" },
  {
    name: "المنتجات",
    icon: <ChevronDown size={18} />,
    children: [
      { name: "منتجات الرجال", to: "/products?category=men" },
      { name: "منتجات النساء", to: "/products?category=women" },
      { name: "منتجات الأطفال", to: "/products?category=children" },
    ],
  },
  { name: "من نحن", to: "/about" },
  { name: "الرئيسية", to: "/" },
];

const mobilenavItems = [...navItems].reverse();

export default function NavBar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { pathname } = useLocation();
  const isDarkHeader = pathname === "/cart" || pathname === "/notifications";
  const navLinksColor = isDarkHeader ? "text-primary" : "text-secondary";
  const mobileIconColor = isDarkHeader ? "text-primary" : "text-secondary";
  const mobileLinksColor = "text-black";

  return (
    <div className="relative">
      {/* ===== Desktop ===== */}
      <ul className="hidden lg:flex gap-6 items-center coursor-pointer">
        {navItems.map((item, index) => {
          // إذا العنصر عنده children → dropdown
          if (item.children) {
            return (
              <div key={index} className="relative">
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === "products" ? null : "products"
                    )
                  }
                  className={`flex items-center gap-1 font-bold cursor-pointer ${navLinksColor}`}
                >
                  {item.name}
                  <motion.span
                    animate={{ rotate: openDropdown === "products" ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={18} />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {openDropdown === "products" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-0 mt-3 w-56 bg-white shadow-xl rounded-lg overflow-hidden"
                    >
                      {item.children.map((subItem, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <NavLink
                            to={subItem.to}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-3 hover:bg-gray-100 transition"
                          >
                            {subItem.name}
                          </NavLink>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          }

          // الروابط العادية
          return (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "text-orange-500" 
                    : navLinksColor  
                }`
              }
            >
              {item.name}
            </NavLink>
          );
        })}
      </ul>

      {/* ===== Mobile Button ===== */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={`text-2xl p-2 cursor-pointer ${mobileIconColor}`}
        >
          {isMobileOpen ? <X /> : <TextAlignJustify />}
        </button>
      </div>


      {/* ===== Mobile Menu ===== */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="absolute right-[-80px] mt-3 w-64 bg-white shadow-2xl rounded-xl p-4 space-y-2 lg:hidden"
          >
            {mobilenavItems.map((item, index) => {
              if (item.children) {
                return (
                  <div key={index}>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === "products" ? null : "products"
                        )
                      }
                      className="flex justify-between w-full py-2 font-bold"
                    >
                      {item.name}
                      <motion.span
                        animate={{ rotate: openDropdown === "products" ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={18} />
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {openDropdown === "products" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-3 mt-2 space-y-2 overflow-hidden"
                        >
                          {item.children.map((subItem, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <NavLink
                                to={subItem.to}
                                onClick={() => {
                                  setIsMobileOpen(false);
                                  setOpenDropdown(null);
                                }}
                                className={({ isActive }) =>
                                  `block py-2 font-medium ${
                                    isActive
                                      ? "text-orange-500" 
                                      : mobileLinksColor  
                                  }`
                                }
                              >
                                {subItem.name}
                              </NavLink>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <NavLink
                  key={index}
                  to={item.to}
                  onClick={() => setIsMobileOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 font-bold ${
                      isActive
                        ? "text-orange-500" 
                        : mobileLinksColor 
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
