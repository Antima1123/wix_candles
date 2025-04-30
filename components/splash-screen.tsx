import { easeInOut, motion } from "framer-motion"

export const SplashScreen = () =>{
    return(
        <motion.div>
            <motion.div animate={{y: [0,-2000]}} transition={{ease: "easeInOut"}} initial={{y: 0}} className="bg-black h-screen w-full absolute z-[100] top-0">
            
            </motion.div>
        </motion.div>
    )
}