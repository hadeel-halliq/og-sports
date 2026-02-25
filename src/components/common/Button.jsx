import { motion } from "framer-motion";
export default function Button({ buttonName, onClick, buttonColor }) { 
  const buttonStyle = buttonColor === "white" ? "bg-primary text-secondary" : "bg-secondary text-primary"
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <button className={`${buttonStyle} w-fit px-4 py-2 rounded-xl cursor-pointer`} onClick={onClick}>
          {buttonName}
      </button>
    </motion.div>
  )
}

