import Image from "next/image"
import { useRouter } from "next/navigation";

interface card {
    image: string,
    price: string,
    name: string,
    description: string;
    slug: string
}

const Shopcard = ({image, price, name, description, slug}: card) =>{
    const router = useRouter();

    const handleRoute = () => {
        router.push(`/Shop/${slug}`)
    }
    return(
        <div 
        className="bg-gray-200 border border-gray-200  rounded-2xl w-[16rem] cursor-pointer"
        onClick={handleRoute}
        >
            <Image
                src={image}
                alt={name}
                width={300}
                height={300}
                className=" h-[12rem] object-center object-contain rounded-t-2xl"
            />
            <div className="flex flex-col py-2 gap-1 px-4">
                <h2 className="text-lg font-[600] text-gray-600 line-clamp-1">{name}</h2>
                <p className="text-sm text-gray-500 line-clamp-1">{description} </p>
                <p className="text-green-800 font-[700]">${price}</p>
            </div>

        </div>
    )
}
export default Shopcard