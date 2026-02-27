import { motion } from "framer-motion";

export default function Button({ buttonName, onClick, buttonColor }) { 
  const buttonStyle =
    buttonColor === "white"
      ? "bg-primary text-secondary"
      : "bg-secondary text-primary";

  return (
    <motion.button
      className={`${buttonStyle} inline-block w-fit px-4 py-2 rounded-xl cursor-pointer`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {buttonName}
    </motion.button>
  );
}