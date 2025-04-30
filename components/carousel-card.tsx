'use client'

import * as React from 'react'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CarouselItemData {
  imageUrl: string
  title: string
  description: string
}

interface CustomCarouselProps {
  items: CarouselItemData[]
  no_items: string
  position_arrow: string
}


export default function Component({ items = [], no_items, position_arrow }: CustomCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full mx-auto"
    >
      <CarouselContent className="-ml-4">
        {items.map((item,index) => (
          <CarouselItem key={index} className={`pl-4 ${no_items=="1/4"? "md:basis-1/4":"md:basis-1/3"}`}>
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-[1] mb-4 h-[450px]">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className=' hover:scale-[0.95] hover:object-cover origin-center'
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className='flex flex-col items-start justify-start w-full mx-auto ml-[9%]'>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground text-center">{item.description}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className={`absolute left-4 ${position_arrow == "top" ? "-top-2" : "top-56 md:-left-14"} -translate-y-1/2 h-20 w-20 bg-background/80 border-2 border-gray-400`}>
        <ChevronLeft className="h-16 w-16" />
      </CarouselPrevious>
      <CarouselNext className={`absolute right-4 ${position_arrow == "top" ? "-top-2" : "top-56 md:-right-14"} -translate-y-1/2 h-20 w-20 bg-background/80 border-2 border-gray-400`}>
        <ChevronRight className="h-8 w-8" />
      </CarouselNext>
    </Carousel>
  )
}