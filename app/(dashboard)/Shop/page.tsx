"use client"

import Shopcard from "./components/card"
import { getProduct } from "@/features/product/use-get-product"

const Store = () =>{
    
    const {data, isLoading} = getProduct() 

    if(isLoading){
        return <div className="max-w-screen-2xl mx-auto px-4 py-8">
        <h1 className="font-[600] text-lg mb-8">Our Store</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {Array.from({ length: 10 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>
    }
    console.log(data)
    
    return(
        <div className="max-w-screen-2xl mx-auto px-4 py-8">
           <h1  className="font-[600] text-lg mb-8 ">Our Store</h1>
           <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
            {data?.map((item,index)=>(
                     <Shopcard
                        slug={item.slug}
                        name={item.productname}
                        description={item.description}
                        price={item.price.toString()}
                        image={item.mainImage}
                        key={index}
                     />
            ))}
           </div>
        </div>
        
    )
}

export default Store

const ProductCardSkeleton = () => {
    return (
      <div className="bg-gray-200 border border-gray-200 rounded-2xl w-[16rem] cursor-pointer animate-pulse">
        <div className="h-[12rem] bg-gray-300 rounded-t-2xl"></div>
        <div className="flex flex-col py-2 gap-1 px-4">
          <div className="h-5 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-5 bg-gray-300 rounded w-1/3"></div>
        </div>
      </div>
    );
  };