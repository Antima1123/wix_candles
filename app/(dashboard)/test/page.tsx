"use client"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { Limiproductpagination } from "@/features/product/limitproduct"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

const TestPage = () =>{
    const [page, setPage]  = useState(1)
    let limit = 2
    const res = Limiproductpagination({page, limit})

    const productdata = res.data?.data || [];
    const countdata = res.data?.countdata.count || 1;
    const currentPage = res.data?.data.length;
    const totalpages = Math.ceil(countdata / limit)

    const handleprev = () =>{
        if(page > 1){
            setPage(page-1)
        }
    }

    const handlenext = () =>{
        setPage(page + 1)
    }
    const router = useRouter()
    const handleclick = (slug: string)=> {
        router.push(`/test/${slug}`)
    }
    return(
        
        <div className="max-w-screen-2xl mx-auto px-4 py-8">
            <div className="flex flex-col justify-normal items-center gap-4 mb-8">
                <h1 className="text-xl font-[600]">Featured Products</h1>
                {/* <p>This is a test page</p> */}
            </div>

            <div className="flex gap-4">
                <div className="hidden md:flex flex-col md:w-[20rem] border border-gray-100">
                    filter
                </div>

                <div className="flex flex-col w-full gap-8">
                    <div className="flex flex-col gap-2">
                        {productdata?.map((item,index)=>(
                            <div key={index} className="flex gap-2 border border-gray-100 w-full cursor-pointer" onClick={() => handleclick(item.slug)}>
                                <Image
                                    src={item.mainImage}
                                    alt={item.productname}
                                    width={500}
                                    height={500}
                                    className="object-cover w-[10rem]"
                                />
                            <div className="flex flex-col gap-2 max-w-[50rem]">
                                <h2 className="text-xl font-[600]">{item.productname}</h2>
                                <p>{item.category}</p>
                                <div>

                                    <p>{item.price}</p>
                                </div>

                            </div>
                            </div>
                        ))}     
                    </div>
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious 
                                    className={`${page === 1 ? 'opacity-50 pointer-events-none' : 'cursor-pointer'}`} 
                                    onClick={()=> handleprev()} 
                                />
                            </PaginationItem>
                            
                            {/* Show max 5 page numbers */}
                            {Array.from({ length: Math.min(5, totalpages) }, (_, i) => {
                                // For pagination with more than 5 pages, adjust index calculation
                                let pageNumber = i + 1;
                                if (totalpages > 5) {
                                    if (page > 3 && page < totalpages - 1) {
                                        // Show current page in the middle
                                        pageNumber = page - 2 + i;
                                    } else if (page >= totalpages - 1) {
                                        // Show last 5 pages
                                        pageNumber = totalpages - 4 + i;
                                    }
                                }
                                
                                return (
                                    <PaginationItem key={pageNumber}>
                                        <PaginationLink 
                                            isActive={pageNumber === page}
                                            onClick={() => setPage(pageNumber)}
                                            className={`cursor-pointer ${pageNumber === page ? 'bg-black text-white hover:bg-black/90' : ''}`}
                                        >
                                            {pageNumber}
                                        </PaginationLink>
                                    </PaginationItem>
                                );
                            })}

                            <PaginationItem>
                                <PaginationNext 
                                    className={`${page >= totalpages ? 'opacity-50 pointer-events-none' : 'cursor-pointer'}`} 
                                    onClick={()=> handlenext()}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>

                </div>
            </div>
        </div>

    )
}
export default TestPage