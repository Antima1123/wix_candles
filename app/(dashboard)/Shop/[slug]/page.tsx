"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { toast } from "@/hooks/use-toast"
import { useParams } from "next/navigation"
import { Usegetproductbyid } from "@/features/product/use-get-slug"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
  const { data: ProductData, isLoading, isError } = Usegetproductbyid(param)
  const [quantity, setQuantity] = React.useState(1)
  const [isWishlisted, setIsWishlisted] = React.useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0)
  const [isImageZoomed, setIsImageZoomed] = React.useState(false)
  const [suggestions, setSuggestions] = React.useState<any>()


  // Format price from cents to dollars
  const formatPrice = (amount: number | undefined) => {
    if (amount === undefined) return ""
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount / 100)
  }

  // Use Skeleton component during loading
  if (isLoading) return <ProductPageSkeleton />
  
  if(isError) return <div className="flex items-center justify-center h-screen">Error</div>
  if(!ProductData) return <div className="flex items-center justify-center h-screen">No Data</div>

  // Calculate stock percentage for progress bar
  const stockPercentage = Math.min((ProductData.inStock / 20) * 100, 100)

  // Handle quantity changes
  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => {
      const newQuantity = prev + change
      if (newQuantity < 1) return 1
      if (newQuantity > ProductData.inStock && ProductData.inStock > 0) return ProductData.inStock
      if (ProductData.inStock <= 0) return 1
      return newQuantity
    })
  }

  // Add to cart functionality
  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} x ${ProductData.productname}`,
      action: (
        <Link href="/cart">
          <Button variant="outline" size="sm">
            View Cart
          </Button> 
        </Link>
      ),
    })
  }

  // Toggle wishlist
  const handleWishlist = () => {
    setIsWishlisted((prev) => !prev)
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: ProductData.productname,
      variant: "default",
    })
  }

  // Get stock status text and color
  const getStockStatus = () => {
    if (ProductData.inStock <= 0) {
      return {
        text: "Out of Stock",
        color: "text-red-500",
        dotColor: "bg-red-500",
      }
    } else if (ProductData.inStock < 10) {
      return {
        text: `Low Stock (${ProductData.inStock} left)`,
        color: "text-amber-500",
        dotColor: "bg-amber-500",
      }
    } else {
      return {
        text: "In Stock",
        color: "text-green-500",
        dotColor: "bg-green-500",
      }
    }
  }

  const stock = getStockStatus()
  const canAddToCart = ProductData.inStock > 0
  
  // Combine images for gallery
  const allImages = [ProductData.mainImage, ...(ProductData.otherImages || [])]

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-1 text-sm text-neutral-500 mb-6">
          <Link href="/" className="hover:text-neutral-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/shop" className="hover:text-neutral-900 transition-colors">
            Shop
          </Link>
          <ChevronRight className="h-3 w-3" />
          {ProductData.category && (
            <>
              <Link
                href={`/shop/${ProductData.category.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:text-neutral-900 transition-colors"
              >
                {ProductData.category}
              </Link>
              <ChevronRight className="h-3 w-3" />
            </>
          )}
          <span className="text-neutral-900 font-medium truncate">{ProductData.productname}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-lg bg-neutral-50">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-square"
                >
                  {ProductData.featured && (
                    <Badge className="absolute top-4 left-4 z-10 font-medium px-3 py-1 bg-black text-white hover:bg-black/90">
                      Featured
                    </Badge>
                  )}

                  <Image
                    src={`${allImages[selectedImageIndex]}`}
                    alt={ProductData.productname}
                    fill
                    priority
                    className={`object-cover transition-all duration-500 ${isImageZoomed ? "scale-110" : "scale-100"}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    onMouseEnter={() => setIsImageZoomed(true)}
                    onMouseLeave={() => setIsImageZoomed(false)}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Thumbnails */}
            {allImages.length > 1 && (
              <div className="grid grid-cols-4 gap-3 mt-3">
                {allImages.map((image, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative rounded-md overflow-hidden aspect-square transition-all ${
                      selectedImageIndex === index
                        ? "ring-2 ring-black"
                        : "ring-1 ring-neutral-200 hover:ring-neutral-300"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${ProductData.productname} thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="100px"
                    />
                  </motion.button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Details Section */}
          <div className="flex flex-col space-y-6">
            <div>
              {ProductData.category && (
                <Link href={`/shop/${ProductData.category.toLowerCase().replace(/\s+/g, "-")}`} className="inline-block">
                  <Badge variant="outline" className="mb-3 text-xs font-normal text-neutral-500 hover:bg-neutral-50">
                    {ProductData.category}
                  </Badge>
                </Link>
              )}

              <h1 className="text-3xl font-medium tracking-tight text-neutral-900 mb-3">{ProductData.productname}</h1>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-medium text-neutral-900">{formatPrice(ProductData.price)}</span>
                {ProductData.previousPrice && (
                  <>
                    <span className="text-base text-neutral-500 line-through">
                      {formatPrice(ProductData.previousPrice)}
                    </span>
                    <Badge className="font-medium bg-red-50 text-red-600 hover:bg-red-100 border-0">
                      {Math.round(((ProductData.previousPrice - ProductData.price) / ProductData.previousPrice) * 100)}% OFF
                    </Badge>
                  </>
                )}
              </div>
            </div>

            <Separator className="bg-neutral-100" />

            {/* Description */}
            <div>
              <p className="text-neutral-600 leading-relaxed">{ProductData.description}</p>
            </div>

            {/* Stock Status */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${stock.dotColor}`} />
                  <span className={`text-sm font-medium ${stock.color}`}>{stock.text}</span>
                </div>
                {ProductData.inStock > 0 && (
                  <span className="text-xs text-neutral-500">{ProductData.inStock} items left</span>
                )}
              </div>
              <Progress value={stockPercentage} className="h-1" />
            </div>

            {/* Purchase Actions */}
            <div className="flex items-center gap-3">
              {/* Quantity Selector */}
              <div className="flex items-center border border-neutral-200 rounded-md">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  className="h-12 rounded-r-none text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <div className="w-12 flex items-center justify-center font-medium border-x border-neutral-200">
                  {quantity}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= ProductData.inStock || ProductData.inStock <= 0}
                  className="h-12 rounded-l-none text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {/* Add to Cart Button */}
              <Button
                onClick={handleAddToCart}
                disabled={!canAddToCart}
                className="flex-1 font-medium h-12 bg-black hover:bg-black/90 text-white"
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                {canAddToCart ? "Add to Cart" : "Out of Stock"}
              </Button>


              {/* Wishlist Button */}
              <Button
                variant="outline"
                size="icon"
                onClick={handleWishlist}
                className="h-12 w-12 relative border-neutral-200 hover:bg-neutral-50"
              >
                <AnimatePresence>
                  {isWishlisted ? (
                    <motion.div
                    key="filled"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                    >
                      <Heart className="h-5 w-5 fill-red-500 text-red-500" />
                    </motion.div>
                  ) : (
                    <motion.div
                    key="outline"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                    >
                      <Heart className="h-5 w-5 text-neutral-600" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>

              {/* Share Button */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="h-12 w-12 border-neutral-200 hover:bg-neutral-50">
                    <Share className="h-5 w-5 text-neutral-600" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="min-w-[180px]">
                  <DropdownMenuItem>
                    <Facebook className="mr-2 h-4 w-4" />
                    <span>Facebook</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Twitter className="mr-2 h-4 w-4" />
                    <span>Twitter</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Instagram className="mr-2 h-4 w-4" />
                    <span>Instagram</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LinkIcon className="mr-2 h-4 w-4" />
                    <span>Copy Link</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Email</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div> {/* End Product Details Grid */}

        {/* Suggestions Section */}
        <div className="mt-16 border-t border-neutral-100 pt-12">
          <h2 className="text-xl font-medium text-neutral-800 mb-6">You Might Also Like</h2>
          <SuggestionBycategory category={ProductData?.category!} />
        </div>

      </div> {/* End max-w-screen-xl container */}
    </div> /* End bg-white min-h-screen */
  )
}
