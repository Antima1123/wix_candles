
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
    icon: JSX.Element;
    head: string;
    des: string;
    index: number;
};

export const ServiceCard = ({
    icon,
    head,
    des,
    index
}: Props) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true); 
    }, []);

    return (
        <motion.div 
            className="gap-y-4 flex-col flex items-center text-center"
            initial={{ x: -50, opacity: 0 }}
            animate={mounted ? { x: 0, opacity: 1 } : false} // Conditionally run animation
            transition={{ delay: index * 0.5 }}
        >
            {icon}
            <h1 className="text-2xl">{head}</h1>
            <p className="text-center text-[#767676]">{des}</p>
        </motion.div>
    );
};
