import Link from "next/link";
import Component from "./carousel-card"
const carouselItems = [
    {
      id: 1,
      imageUrl: "/banner-6.jpg",
      title: "Item 1",
      description: "This is the first item in the carousel."
    },
    {
      id: 2,
      imageUrl: "/banner-1.jpg",
      title: "Item 2",
      description: "This is the second item in the carousel."
    },
    {
      id: 2,
      imageUrl: "/banner-2.jpg",
      title: "Item 2",
      description: "This is the second item in the carousel."
    },
    {
      id: 2,
      imageUrl: "/banner-3.jpg",
      title: "Item 2",
      description: "This is the second item in the carousel."
    },
    {
      id: 2,
      imageUrl: "/banner-4.jpg",
      title: "Item 2",
      description: "This is the second item in the carousel."
    },
    {
      id: 2,
      imageUrl: "/banner-5.jpg",
      title: "Item 2",
      description: "This is the second item in the carousel."
    },

    // ... more items
  ];
export const NewArrival = () =>{
    return(
        <div className="w-full ">
          <div className="px-16 py-32 max-w-screen-2xl mx-auto">
            <Component position_arrow="center" no_items="1/4" items={carouselItems}/>
          </div>
        </div>
    )
}