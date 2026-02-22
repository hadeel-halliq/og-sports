import { ChevronDown, X, TextAlignJustify } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navItems = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  {
    name: "Products",
    icon: <ChevronDown size={18} />,
    children: [
      { name: "Men Products", to: "/products?category=men" },
      { name: "Women Products", to: "/products?category=women" },
      { name: "Children Products", to: "/products?category=children" },
    ],
  },
  { name: "Contact", to: "/contact" },
];

export default function NavBar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <div className="relative">
      {/* ===== Desktop ===== */}
      <ul className="hidden lg:flex gap-6 items-center">
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
                  className="flex items-center gap-1 font-bold text-gray-700"
                >
                  {item.name}
                  {item.icon}
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
                        <NavLink
                          key={i}
                          to={subItem.to}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-4 py-3 hover:bg-gray-100 transition"
                        >
                          {subItem.name}
                        </NavLink>
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
                  isActive ? "text-primary" : "text-gray-700"
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
          className="text-2xl p-2"
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
            className="absolute right-0 mt-3 w-64 bg-white shadow-2xl rounded-xl p-4 space-y-2 lg:hidden"
          >
            {navItems.map((item, index) => {
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
                      {item.icon}
                    </button>

                    {openDropdown === "products" && (
                      <div className="ml-3 mt-2 space-y-2">
                        {item.children.map((subItem, i) => (
                          <NavLink
                            key={i}
                            to={subItem.to}
                            onClick={() => {
                              setIsMobileOpen(false);
                              setOpenDropdown(null);
                            }}
                            className="block py-2 text-gray-600"
                          >
                            {subItem.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={index}
                  to={item.to}
                  onClick={() => setIsMobileOpen(false)}
                  className="block py-2 font-bold"
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