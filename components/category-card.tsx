import Image from "next/image"
import { motion } from  "framer-motion"

type props= {
    img: string;
    title: string;
    index: number
}
export const Category = ({
    img,
    title,
    index
}: props) =>{
    return(
        <motion.div 
            className="flex flex-col justify-center items-center"
            initial={{opacity: 0, x: 40}}
            animate={{ opacity: 1, x:0 }}
            transition={{ delay: index * 0.2}}
        >
            <div className="flex flex-col gap-y-1 ">
                <Image src={img} alt="" width={500} height={500} className="object-contain p-3 "/>
                <h1 className=" ml-3 flex items-start text-gray-400 font-[400] mb-4">{title}</h1>
            </div>
        </motion.div>
    )
}