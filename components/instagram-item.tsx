import Image from "next/image"

type props = {
    img: string;
}
export const InstaItem = ({ img }:props) =>{
    return(
        <div className="" >
            <Image
                src={img}
                height={400}
                width={400}
                alt="insta-item"
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
    )
}