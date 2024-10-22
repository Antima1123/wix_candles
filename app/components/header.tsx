import Image from "next/image"
import { Navigation } from "./navigation"

const Header = () =>{
    return(
        <header className="py-16 flex items-center justify-between px-20">
            <Image alt="image" src="/logo.svg" width={100} height={100}/>
            <Navigation/>
            
        </header>
    )
}
export default Header