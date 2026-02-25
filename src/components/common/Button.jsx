import { motion } from "framer-motion";
export default function Button({ buttonName, onClick }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <button className="bg-secondary text-primary w-fit px-4 py-2 rounded-xl cursor-pointer" onClick={onClick}>
          {buttonName}
      </button>
    </motion.div>
  )
}

