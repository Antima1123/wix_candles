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
  ];
export const Carousel = () =>{
    return(
        <div className="w-full bg-[#F1F1F0] md:px-16">
          <div className="py-32 max-w-screen-2xl mx-auto">
            <Component no_items="1/3" items={carouselItems} position_arrow={"top"}/>
          </div>
        </div>
    )
}