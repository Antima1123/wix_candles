import Image from "next/image"

type props ={
    img: string;
    heading: string;
    p1: string;
    p2: string;
}
export const BlogPost = ({
        img,
        heading,
        p1,
        p2
    }:props) =>{
    return(
        <div className="flex flex-col w-full"> 
                <Image
                    src={img}
                    alt="blog-1"
                    height={800}
                    width={800}
                    className=" object-contain "
                    style={{ objectFit: 'contain' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                />
                <div className="gap-2 flex flex-col">
                    <p className="text-gray-400 font-500">{p1}</p>
                    <h1 className="text-2xl">{heading}</h1>
                    <p className="text-gray-400 font-500">{p2}</p>
                </div>
        </div>
    )
}