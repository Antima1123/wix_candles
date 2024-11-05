import Image from "next/image"

type props= {
    img: string;
    title: string;
}
export const Category = ({
    img,
    title
}: props) =>{
    return(
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col gap-y-1 ">
                <Image src={img} alt="" width={500} height={500} className="object-contain p-3 "/>
                <h1 className=" ml-3 flex items-start text-gray-400 font-[400] mb-4">{title}</h1>
            </div>
        </div>
    )
}