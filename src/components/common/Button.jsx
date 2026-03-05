import { motion } from "framer-motion";

export default function Button({ buttonName, onClick, buttonColor, width }) {
  const buttonStyle =
    buttonColor === "white"
      ? "bg-primary text-secondary text-sm"
      : "bg-secondary text-primary text-sm";
  const widthClass = width ? width : "w-fit";
  return (
    <motion.button
      className={`${buttonStyle} inline-block ${widthClass} px-3 py-1.5 rounded-sm cursor-pointer`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {buttonName}
    </motion.button>
  );
}