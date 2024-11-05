import Image from "next/image"
import { FaPlay } from "react-icons/fa"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"

export const VideoPage = () =>{

    const control = useAnimation();
    useEffect(()=> {
        control.start({
            rotate:[null, 360],
            transition: {
                duration: 15,
                repeat: Infinity,
                ease: "linear"
            }
        })
    })
    return(
        <div className="w-full p-2 mt-20">
            <div className=" relative max-w-screen-2xl mx-auto items-center justify-center flex ">
                <Image
                    src="/video-image.jpg"
                    alt="video-image"    
                    height={2000}
                    width={2000} 
                    className="w-100"          
                />
                <FaPlay className="absolute" color="white"/>
                <motion.div className="absolute" animate={control}>
                    <Image
                        src="/text-pattern.png"
                        alt="text-pattern"
                        height={200}
                        width={200}
                        className=" "
                    />
                </motion.div>
                
            </div>
        </div>
    )
}