"use client"
import Image from "next/image"
import { motion } from 'framer-motion';
import { GiShoppingBag } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const Header = () =>{
    const [active, setActive] = useState(false);
    const handleClick = () =>{
        setActive(!active)
    }
    return(
        <>
            <div className="flex lg:hidden justify-between items-center py-4 px-8">
                {/* Mobile */}
                <div>
                    <Image src="/logo.svg" height={110} width={110} alt="logo"/>
                </div>

                <div className="flex  gap-x-4">

                    <GiShoppingBag size={25}/>
                    <FaRegHeart size={25}/>

                    <motion.div className={`flex flex-col w-[18px] gap-[6px] z-[100]`} onClick={handleClick}>
                        <motion.div 
                            className={`h-[2px] w-6 origin-left bg-black`} 
                            animate={{rotate: active ? 45 : 0}}>
                        </motion.div>

                        <motion.div 
                            className="h-[2px] w-6 bg-black"  
                            animate={{opacity: active ? 0 : 1}}>
                        </motion.div>
                        
                        <motion.div 
                            className={`h-[2px] w-6 origin-left bg-black `} 
                            animate={{rotate: active ? -45 : 0}}>
                        </motion.div>
                    </motion.div>
                </div>
                

                {active && (
                    <motion.div 
                        initial={{y: -1000}} 
                        animate={{y: 0}} 
                        transition={{ ease: "easeInOut",}} 
                        className=" text-black flex w-screen h-screen absolute z-[80] left-0 top-0 bg-[#f1f1f0] justify-center items-center"
                        >
                        <nav className="font-[600] gap-y-8 flex flex-col">
                            <button>HOME</button>
                            <button>SHOP</button>
                            <button>PAGES</button>
                            <button>ABOUT US</button>
                            <button>CONTACT</button>
                        </nav>
                    </motion.div>
                )}
            </div>

             {/* large screen  */}
            <div className="lg:flex hidden py-4 max-w-screen-2xl mx-auto justify-between items-center px-4">
                <div>
                    <Image src="/logo.svg" height={110} width={110} alt="logo"/>
                </div>

                <div className="gap-x-16 flex">
                    <button>HOME</button>
                    <button>SHOP</button>
                    <button>PAGES</button>
                    <button>ABOUT US</button>
                    <button>CONTACT</button>
                </div>
                
                <div className="flex gap-x-8 items-center">
                    <GiShoppingBag size={25}/>
                    <FaRegHeart size={25}/>
                    <FiSearch size={25}/>
                </div>
            </div>
            
        </>
    )
}
export default Header