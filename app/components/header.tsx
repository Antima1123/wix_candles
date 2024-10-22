import { IoGiftOutline, IoSearchOutline } from "react-icons/io5"
import { Navigation } from "./navigation"
import { GiShoppingBag } from "react-icons/gi"

const Header = () =>{
    return(
        <header className="py-16 flex items-center justify-between px-20">
            <Navigation/>
            
        </header>
    )
}
export default Header