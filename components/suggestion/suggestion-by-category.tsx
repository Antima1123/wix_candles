"use client"

import { useGetSuggestions } from "@/features/product/use-get-suggestion"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Skeleton } from "@/components/ui/skeleton"

type categoryProps= {
    category: string
}

type Datatype = {
    id: string;
    mainImage: string;
    otherImages: string[] | null;
    productname: string;
    price: number;
    previousPrice: number | null;
    slug: string;
    description: string;
    inStock: number;
    featured: boolean | null;
    category: string | null;
    createdAt: string | null;
    updatedAt: string | null;
}

const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price / 100)
}

// Modern shimmer animation class
const shimmer = "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent"

// Skeleton component for a single suggestion card
const SuggestionCardSkeleton = () => (
    <div className="group block bg-white rounded-xl overflow-hidden">
        <Skeleton className={`w-full aspect-[4/5] bg-neutral-100 ${shimmer}`} />
        <div className="p-3 space-y-2">
            <Skeleton className={`h-3 w-4/5 rounded-full bg-neutral-100 ${shimmer}`} />
            <Skeleton className={`h-4 w-1/2 rounded-full bg-neutral-100 ${shimmer}`} />
        </div>
    </div>
)

const SuggestionBycategory = ({category}: categoryProps) => {
    const [suggestion, setSuggestion] = useState<Datatype[]>();
    const mutation = useGetSuggestions();

    const handleSuggestion = async() => {
        try {
            const res = await mutation.mutateAsync({category: category});
            setSuggestion(Array.isArray(res) ? res : res?.data || []); 
        } catch (error) {
            console.error("Failed to fetch suggestions:", error);
            setSuggestion([]);
        }
    }

    useEffect(() => {
        if (category) {
            handleSuggestion()
        }
    }, [category]);

    if (mutation.isPending) {
        return (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 animate-fade-in">
                {[...Array(5)].map((_, index) => (
                    <SuggestionCardSkeleton key={index} />
                ))}
            </div>
        )
    }

    if (!suggestion || suggestion.length === 0) {
        return <div className="text-center p-4 text-gray-500">No suggestions found for this category.</div>
    }
    
    return(
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 p-4">
            {suggestion.map((item) => (
                <Link key={item.id} href={`/Shop/${item.slug}`} legacyBehavior>
                    <a className="group block bg-white border border-gray-100 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="relative w-full aspect-[4/5] overflow-hidden">
                           <Image
                                src={`${item.mainImage}`}
                                alt={item.productname}
                                layout="fill"
                                objectFit="cover"
                                className="group-hover:scale-105 transition-transform duration-300 aspect-square"
                            />
                        </div>
                        <div className="p-2">
                            <h3 className="text-xs font-medium text-gray-700 truncate group-hover:text-blue-600">
                                {item.productname}
                            </h3>
                            <p className="text-sm font-semibold text-gray-800 mt-1">
                                {formatPrice(item.price)} 
                            </p>
                        </div>
                    </a>
                </Link>
            ))}
        </div>
    )
}

export default SuggestionBycategory