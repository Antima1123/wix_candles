import { easeInOut, motion } from "framer-motion" 

export const DashboardText = () =>{
    return (
        <div className="w-full bg-[#F1F1F0] py-8 px-24">
            <div className=" flex justify-center items-center text-center ">
                <div className="w-full justify-center items-center flex flex-col gap-y-8">
                    <div 
                        className="lg:text-6xl text-7xl font-sarif">New Collections</div>
                    <div 
                        className="text-center text-gray-400 font-semibold text-wrap md:w-[40rem] w-[20rem] justify-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas ut dolorum consequuntur, adipisci repellat! Eveniet commodi voluptatem voluptate, eum minima, in suscipit explicabo voluptatibus harum, quibusdam ex repellat eaque!
                    </div>
                </div>
            </div>
        </div>
    )
}