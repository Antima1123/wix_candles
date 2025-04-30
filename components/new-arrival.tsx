import Link from "next/link";
import Component from "./carousel-card"
const carouselItems = [
    {
      imageUrl: "/product-item-1.jpg",
      title: "Item 2",
      description: "This is the second item in the carousel."
    },
    {
      imageUrl: "/product-item-2.jpg",
      title: "Item 2",
      description: "This is the second item in the carousel."
    },
    {
      imageUrl: "/product-item-3.jpg",
      title: "Item 2",
      description: "This is the second item in the carousel."
    },
    {
      imageUrl: "/product-item-4.jpg",
      title: "Item 2",
      description: "This is the second item in the carousel."
    },
    {
      imageUrl: "/product-item-10.jpg",
      title: "Item 2",
      description: "This is the second item in the carousel."
    },

  ];
  
export const NewArrival = () =>{
    return(
        <div className="w-full ">
          <div className="md:px-16 md:mt-20 mt-8 max-w-screen-2xl mx-auto">
            <Component position_arrow="center" no_items="1/4" items={carouselItems}/>
          </div>
        </div>
    )
}