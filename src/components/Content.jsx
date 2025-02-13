import { motion } from "framer-motion";

function Content( { onClose }) {
    return(
        <motion.div
            initial={{ x: "110%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "150%", opacity: 0 }}  // 確保退出時有動畫
            transition={{ duration: 0.5, ease: "easeOut" }}
            onAnimationComplete={(definition) => {
                if (definition === "exit") {
                    onClose(); // 只有 exit 動畫結束才關閉
                }
            }}
            className="flex m-2 right-0 z-50 absolute"
        >
            <div className="w-96 h-96 bg-food-bitgreen border-food-darkgreen border-4 rounded-4xl z-50 shadow-card">
                <div>

                </div>
            </div>
        </motion.div>
    )
}

export default Content