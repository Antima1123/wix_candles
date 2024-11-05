import { BsFillHandbagFill } from "react-icons/bs";
import { ServiceCard } from "./servicecard";
import { IoGiftOutline } from "react-icons/io5";
import { LuRefreshCcw } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";


const services = [
    {
        icon: <SlCalender color="#767676" size={40}/>,
        head: "Book An Appointment",
        des: "At imperdiet dui accumsan sit amet nulla risus est ultricies quis."
    },
    {
        icon: <BsFillHandbagFill  color="#767676" size={40}/>,
        head: "Pick up in store",
        des: "At imperdiet dui accumsan sit amet nulla risus est ultricies quis."
    },
    {
        icon: <IoGiftOutline color="#767676" size={40}/>,
        head: "Special packaging",
        des: "At imperdiet dui accumsan sit amet nulla risus est ultricies quis."
    },
    {
        icon: <LuRefreshCcw color="#767676" size={40}/>,
        head: "free global returns",
        des: "At imperdiet dui accumsan sit amet nulla risus est ultricies quis."
    },
]
export const Services= () =>{
    return(
        <div className="px-16 grid md:grid-cols-4 gap-16 py-32 max-w-screen-2xl mx-auto">
            {services.map((serv,index)=>(
            <ServiceCard
            key={index}
            icon={serv.icon}
            head={serv.head}
            des={serv.des}
            />
            ))}
        </div>
    )
}