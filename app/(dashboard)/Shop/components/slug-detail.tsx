type props = {
    productname: string
} 
const Slugcard = ({productname}: props) =>{
    
 return(
    <div>
        {productname}
    </div>
 )
}

export default Slugcard





















































































// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { ChevronLeft, Heart, Minus, Plus, Share2, ShoppingCart, Star } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { Separator } from "@/components/ui/separator"
// import { Badge } from "@/components/ui/badge"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { cn } from "@/lib/utils"

// type Product = {
//   id: string
//   mainImage: string
//   otherImages: string[]
//   productname: string
//   price: number
//   previousPrice?: number
//   slug: string
//   description: string
//   inStock: number
//   featured: boolean
//   category?: string
//   createdAt: string
//   updatedAt: string
// }

// export default function ProductDetail({ mainImage, otherImages, productname, price, previousPrice , slug ,description, inStock , featured , category, createdAt, updatedAt}:  Product ) {
//   const [quantity, setQuantity] = useState(1)
//   const [selectedImage, setSelectedImage] = useState(mainImage)

//   const incrementQuantity = () => {
//     if (quantity <inStock) {
//       setQuantity(quantity + 1)
//     }
//   }

//   const decrementQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1)
//     }
//   }

//   const formatPrice = (price: number) => {
//     return new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD",
//     }).format(price / 100)
//   }

//   const discountPercentage = previousPrice
//     ? Math.round(((previousPrice - price) / previousPrice) * 100)
//     : 0

//   const allImages = [mainImage, ...(Array.isArray(otherImages) ? otherImages : [])];

//   return (
//     <div className="container max-w-7xl mx-auto px-4 py-8 md:py-12">
//       <div className="mb-6">
//         <Link
//           href="/products"
//           className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900"
//         >
//           <ChevronLeft className="mr-1 h-4 w-4" />
//           Back to products
//         </Link>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
//         {/* Product Images */}
//         <div className="space-y-4">
//           <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
//             <Image
//               src={`data:image/png;base64,${selectedImage || mainImage || "/placeholder.svg"}`}
//               alt={productname}
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>

//           <div className="flex space-x-2 overflow-x-auto pb-2 snap-x">
//             {allImages.map((image, index) => (
//               <button
//                 key={index}
//                 className={cn(
//                   "relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md snap-start",
//                   selectedImage === image && "ring-2 ring-black",
//                 )}
//                 onClick={() => setSelectedImage(image)}
//               >
//                 <Image
//                   src={`data:image/png;base64,${image}`}
//                   alt={`Product image ${index + 1}`}
//                   fill
//                   className="object-cover"
//                 />
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Product Info */}
//         <div className="flex flex-col space-y-6">
//           <div>
//             {category && (
//               <Badge variant="outline" className="mb-2">
//                 {category}
//               </Badge>
//             )}
//             <h1 className="text-3xl font-bold tracking-tight">{productname}</h1>

//             <div className="mt-2 flex items-center">
//               <div className="flex items-center">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <Star key={star} className="h-5 w-5 fill-primary text-primary" />
//                 ))}
//               </div>
//               <span className="ml-2 text-sm text-gray-500">(24 reviews)</span>
//             </div>
//           </div>

//           <div className="flex items-end gap-2">
//             <span className="text-3xl font-bold">{formatPrice(price)}</span>
//             {previousPrice && (
//               <>
//                 <span className="text-lg text-gray-500 line-through">{formatPrice(previousPrice)}</span>
//                 <Badge className="bg-red-500 hover:bg-red-600 ml-2">{discountPercentage}% OFF</Badge>
//               </>
//             )}
//           </div>

//           <Separator />

//           <div className="space-y-4">
//             <div>
//               <h3 className="font-medium mb-2">Description</h3>
//               <p className="text-gray-600">{description}</p>
//             </div>

//             <div>
//               <h3 className="font-medium mb-2">Availability</h3>
//               <p className={cn("text-sm font-medium", inStock > 0 ? "text-green-600" : "text-red-600")}>
//                 {inStock > 0 ? `In Stock (${inStock} available)` : "Out of Stock"}
//               </p>
//             </div>
//           </div>

//           <Separator />

//           <div className="space-y-4">
//             <div className="flex items-center">
//               <span className="mr-4 font-medium">Quantity</span>
//               <div className="flex items-center border rounded-md">
//                 <Button variant="ghost" size="icon" onClick={decrementQuantity} disabled={quantity <= 1}>
//                   <Minus className="h-4 w-4" />
//                 </Button>
//                 <span className="w-10 text-center">{quantity}</span>
//                 <Button variant="ghost" size="icon" onClick={incrementQuantity} disabled={quantity >= inStock}>
//                   <Plus className="h-4 w-4" />
//                 </Button>
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-3">
//               <Button className="flex-1 gap-2" size="lg" disabled={inStock === 0}>
//                 <ShoppingCart className="h-5 w-5" />
//                 Add to Cart
//               </Button>
//               <Button variant="outline" size="lg" className="gap-2">
//                 <Heart className="h-5 w-5" />
//                 <span className="sr-only sm:not-sr-only">Wishlist</span>
//               </Button>
//               <Button variant="outline" size="icon" className="sm:h-12 sm:w-12">
//                 <Share2 className="h-5 w-5" />
//                 <span className="sr-only">Share</span>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mt-16">
//         <Tabs defaultValue="details">
//           <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
//             <TabsTrigger
//               value="details"
//               className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
//             >
//               Product Details
//             </TabsTrigger>
//             <TabsTrigger
//               value="reviews"
//               className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
//             >
//               Reviews (24)
//             </TabsTrigger>
//             <TabsTrigger
//               value="shipping"
//               className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
//             >
//               Shipping & Returns
//             </TabsTrigger>
//           </TabsList>
//           <TabsContent value="details" className="pt-6">
//             <div className="prose max-w-none">
//               <h3>Product Specifications</h3>
//               <ul>
//                 <li>Premium quality materials</li>
//                 <li>Designed for durability and style</li>
//                 <li>Easy to clean and maintain</li>
//                 <li>Dimensions: 12" x 8" x 14"</li>
//                 <li>Weight: 2.5 lbs</li>
//               </ul>

//               <h3>Care Instructions</h3>
//               <p>
//                 Clean with a soft, dry cloth. Avoid using harsh chemicals or abrasive materials that could damage the
//                 finish. Store in a cool, dry place when not in use.
//               </p>
//             </div>
//           </TabsContent>
//           <TabsContent value="reviews" className="pt-6">
//             <div className="space-y-6">
//               <div className="flex items-center justify-between">
//                 <h3 className="text-lg font-medium">Customer Reviews</h3>
//                 <Button>Write a Review</Button>
//               </div>

//               <div className="space-y-6">
//                 {/* Sample review */}
//                 <div className="border-b pb-6">
//                   <div className="flex items-center justify-between mb-2">
//                     <div className="flex items-center gap-2">
//                       <div className="flex">
//                         {[1, 2, 3, 4, 5].map((star) => (
//                           <Star key={star} className="h-4 w-4 fill-primary text-primary" />
//                         ))}
//                       </div>
//                       <span className="font-medium">Excellent product!</span>
//                     </div>
//                     <span className="text-sm text-gray-500">2 days ago</span>
//                   </div>
//                   <p className="text-sm text-gray-600 mb-2">
//                     This product exceeded my expectations. The quality is outstanding and it looks even better in
//                     person.
//                   </p>
//                   <span className="text-sm font-medium">Sarah J.</span>
//                 </div>

//                 {/* Sample review */}
//                 <div className="border-b pb-6">
//                   <div className="flex items-center justify-between mb-2">
//                     <div className="flex items-center gap-2">
//                       <div className="flex">
//                         {[1, 2, 3, 4].map((star) => (
//                           <Star key={star} className="h-4 w-4 fill-primary text-primary" />
//                         ))}
//                         {[5].map((star) => (
//                           <Star key={star} className="h-4 w-4 text-gray-300" />
//                         ))}
//                       </div>
//                       <span className="font-medium">Great value</span>
//                     </div>
//                     <span className="text-sm text-gray-500">1 week ago</span>
//                   </div>
//                   <p className="text-sm text-gray-600 mb-2">
//                     Very happy with my purchase. The shipping was fast and the product is exactly as described.
//                   </p>
//                   <span className="text-sm font-medium">Michael T.</span>
//                 </div>
//               </div>
//             </div>
//           </TabsContent>
//           <TabsContent value="shipping" className="pt-6">
//             <div className="prose max-w-none">
//               <h3>Shipping Information</h3>
//               <p>
//                 We offer free standard shipping on all orders over $50. Standard shipping typically takes 3-5 business
//                 days. Express shipping is available for an additional fee and typically arrives within 1-2 business
//                 days.
//               </p>

//               <h3>Return Policy</h3>
//               <p>
//                 We accept returns within 30 days of delivery. Items must be unused and in their original packaging. To
//                 initiate a return, please contact our customer service team.
//               </p>

//               <h3>International Shipping</h3>
//               <p>
//                 We ship to most countries worldwide. International shipping rates and delivery times vary by location.
//                 Please note that international orders may be subject to customs fees and import duties.
//               </p>
//             </div>
//           </TabsContent>
//         </Tabs>
//       </div>

//       {/* Related Products Section */}
//       <div className="mt-16">
//         <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {[1, 2, 3, 4].map((item) => (
//             <div key={item} className="group">
//               <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 mb-3">
//                 <Image
//                   src={`/placeholder.svg?height=300&width=300&text=Related+${item}`}
//                   alt={`Related product ${item}`}
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//               </div>
//               <h3 className="font-medium text-sm">Related Product {item}</h3>
//               <p className="text-sm text-gray-500">$99.99</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }
