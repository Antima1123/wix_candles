"use client"
import { PracticeSuggestion } from "@/features/practice/practicesuggestion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import Image from "next/image"
import { useState } from "react"
import { Button } from "../ui/button"

type practicesuggestionprops = {
    category: string,
    productname: string,
}
const Practicesuggestionui = ({category, productname}: practicesuggestionprops) =>{
    const [page, setPage] = useState(1)
    const limit = 2;
    const response = PracticeSuggestion({category, productname, limit ,page})
    const SuggestionData = response.data?.data || []
    const countdata = response.data?.countdata.count || 1;
    const totalpages = Math.ceil(countdata/limit)

    const handleprev = () =>{
        if(page > 1){
            setPage(page - 1)
        }
    }

    const handlenext = () =>{
        setPage(page + 1)
    }
    return (
        <div>
            <Carousel>
                <CarouselContent>
                    {SuggestionData.map((suggest, index) =>(
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                        <div className="px-4">
                            <Image
                                src={suggest.mainImage}
                                alt={suggest.productname}
                                width={200}
                                height={200}
                                className=" object-cover"
                            />
                            <h2 className="w-[10rem]  line-clamp-1">{suggest.productname}</h2>
                            <p >{suggest.price}</p>
                        </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <Button className={`${page == 1 ? 'opacity-50 pointer-events-none' : 'cursor-pointer'} `} onClick={()=>handleprev()}>pre</Button>
                <Button className={`${page >= totalpages ? 'opacity-50 pointer-events-none': " cursor-pointer" }`} onClick={()=>handlenext()}>nex</Button>
            </Carousel>
        </div>
    )
}
export default Practicesuggestionui