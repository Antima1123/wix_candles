"use client"

import { motion } from 'framer-motion'

const PageAnimation = ({children}: {children: React.ReactNode}) => {
    return (
        <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: [0,1] }}
        transition={{ delay: 0.5, duration: 0.5 }}
        >
            {children}
        </motion.div>
    )
}

export default PageAnimation