"use client"

import * as React from "react"
import Link from "next/link"
import { toast } from "@/hooks/use-toast"
import { useParams } from "next/navigation"
import { Usegetproductbyid } from "@/features/product/use-get-slug"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Minus,
  Plus,
  Heart,
  Share,
  Star,
  ShoppingBag,
  ChevronRight,
  Check,
  Facebook,
  Twitter,
  Instagram,
  LinkIcon,
  Mail,
  ArrowRight,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useGetSuggestions } from "@/features/product/use-get-suggestion"
import { set } from "zod"
import SuggestionBycategory from "@/components/suggestion/suggestion-by-category"
import PracticeSuggestion from "@/components/suggestion/practice-suggestion"
import Practicesuggestionui from "@/components/suggestion/practice-suggestion"
import { Practiceslug } from "@/features/practice/practiceslug"
import Image from "next/image"

// Modern shimmer animation class
const shimmer = "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent"

// Skeleton Loader Component for the Product Page
const ProductPageSkeleton = () => (
  <div className="bg-white min-h-screen animate-fade-in">
    <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Breadcrumb Skeleton */}
      <div className="flex items-center space-x-2 text-sm mb-8">
        <Skeleton className={`h-3 w-16 rounded-full ${shimmer}`} />
        <ChevronRight className="h-3 w-3 text-neutral-200" />
        <Skeleton className={`h-3 w-14 rounded-full ${shimmer}`} />
        <ChevronRight className="h-3 w-3 text-neutral-200" />
        <Skeleton className={`h-3 w-20 rounded-full ${shimmer}`} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Image Skeleton */}
        <div className="space-y-4">
          <Skeleton className={`relative aspect-square w-full rounded-xl bg-neutral-100 ${shimmer}`} />
          <div className="grid grid-cols-4 gap-3">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className={`aspect-square w-full rounded-lg bg-neutral-100 ${shimmer}`} />
            ))}
          </div>
        </div>

        {/* Details Skeleton */}
        <div className="flex flex-col space-y-6">
          <div className="space-y-3">
            <Skeleton className={`h-5 w-24 rounded-full bg-neutral-100 ${shimmer}`} /> {/* Category */}
            <Skeleton className={`h-9 w-3/4 rounded-lg bg-neutral-100 ${shimmer}`} /> {/* Title */}
            <div className="flex items-center gap-3 mt-2">
              <Skeleton className={`h-7 w-28 rounded-lg bg-neutral-100 ${shimmer}`} /> {/* Price */}
              <Skeleton className={`h-5 w-20 rounded-lg bg-neutral-100 ${shimmer}`} /> {/* Discount */}
            </div>
          </div>

          <Separator className="bg-neutral-100" />

          {/* Description Skeleton */}
          <div className="space-y-2">
            {[...Array(3)].map((_, i) => (
              <Skeleton 
                key={i} 
                className={`h-4 ${i === 2 ? 'w-2/3' : 'w-full'} rounded-full bg-neutral-100 ${shimmer}`} 
              />
            ))}
          </div>

          {/* Stock Status Skeleton */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Skeleton className={`h-4 w-24 rounded-full bg-neutral-100 ${shimmer}`} />
              <Skeleton className={`h-3 w-16 rounded-full bg-neutral-100 ${shimmer}`} />
            </div>
            <Skeleton className={`h-1.5 w-full rounded-full bg-neutral-100 ${shimmer}`} />
          </div>

          {/* Actions Skeleton */}
          <div className="flex items-center gap-3 pt-4">
            <Skeleton className={`h-12 w-32 rounded-lg bg-neutral-100 ${shimmer}`} /> {/* Quantity */}
            <Skeleton className={`h-12 flex-1 rounded-lg bg-neutral-100 ${shimmer}`} /> {/* Add to Cart */}
            <Skeleton className={`h-12 w-12 rounded-lg bg-neutral-100 ${shimmer}`} /> {/* Wishlist */}
            <Skeleton className={`h-12 w-12 rounded-lg bg-neutral-100 ${shimmer}`} /> {/* Share */}
          </div>
        </div>
      </div>

      {/* Suggestions Section Skeleton */}
      <div className="mt-16 border-t border-neutral-100 pt-12">
        <Skeleton className={`h-7 w-48 rounded-lg bg-neutral-100 mb-8 ${shimmer}`} />
      </div>
    </div>
  </div>
)

export default function ProductPage() {
  
  const param = useParams()
  const {data: ProductData , isLoading} = Practiceslug(param)

  if(isLoading){
    return <ProductPageSkeleton/>
  }

  return (
    <div className=" max-w-screen-2xl mx-auto p-16">
      <div className="flex flex-col gap-2">
        {ProductData?.mainImage &&
        (<>
          <Image
              src={ProductData.mainImage}
              alt={ProductData.productname}
              width={400}
              height={400}
              className="object-cover border border-gray-200"
          />
        </>)}

        <div className="flex gap-2">
          {ProductData?.otherImages && 
          (<>
            {ProductData.otherImages.map((image, index)=>(
              <Image
                  key={index}
                  src={image}
                  alt={ProductData.productname}
                  width={100}
                  height={100}
                  className="object-cover"
              />
            ))}
          </>)}
        </div>
          
      </div>
      {ProductData?.category && (
        <>
          {/* Suggestions Section */}
          <div className="mt-16 border-t border-neutral-100 pt-12">
            <h2 className="text-xl font-medium text-neutral-800 mb-6">You Might Also Like</h2>
            <Practicesuggestionui category={ProductData.category || ''} productname={ProductData.productname} />
          </div>
        </>
      )}
    </div>
  )
}
