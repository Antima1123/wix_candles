import Image from "next/image"
type props = {
    img: string
}
export const Brands = ({img}:props) =>{
    return(
        <div className=" flex justify-center items-center ">
            <Image
                src={img}
                height={200}
                width={200}
                alt="logo1"
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
    )
}