"use client"
import { DashboardText } from "@/components/dashboard-text";
import { Services } from "@/components/services";
import { useGetUsers } from "@/features/users/use-get-users";
import { Carousel } from "@/components/carousel";
import { Category } from "@/components/category-card";
import { title } from "process";
import { NewArrival } from "@/components/new-arrival";
import { BigImage } from "@/components/big-image";
import { VideoPage } from "@/components/video";
import { BlogPost } from "@/components/blog-post";
export default function Home() {

  const dataQuery = useGetUsers();
  const data = dataQuery.data || [];
  console.log(dataQuery)
 

  const isLoading = dataQuery.isLoading;

  if (isLoading) {
    return (
      <div>loading users</div>
    )
  }

  const category_array = [
    {
      img: "/cat-1.jpg",
      title: "SHOP FOR MEN"
    },
    {
      img: "/cat-2.jpg",
      title: "SHOP FOR WOMEN"
    },
    {
      img: "/cat-3.jpg",
      title: "SHOP ACCESSERIES"
    },
  ]

  const blogpost = [
    {
      img: "/blog-1.jpg",
      p1: "Fashion / jul 11, 2022",
      heading: "How to look outstanding in pastel",
      p2: "Dignissim lacus,turpis ut suspendisse vel tellus.Turpis purus,gravida orci,fringilla..."
    },
    {
      img: "/blog-2.jpg",
      p1: "Fashion / jul 11, 2022",
      heading: "How to look outstanding in pastel",
      p2: "Dignissim lacus,turpis ut suspendisse vel tellus.Turpis purus,gravida orci,fringilla..."
    },
    {
      img: "/blog-3.jpg",
      p1: "Fashion / jul 11, 2022",
      heading: "How to look outstanding in pastel",
      p2: "Dignissim lacus,turpis ut suspendisse vel tellus.Turpis purus,gravida orci,fringilla..."
    }
  ]
  
  return (
    <div className="h-full w-full flex relative items-center justify-center flex-col">
      <DashboardText/>
      <Carousel/>
      <Services/>
      <div className="md:px-16 grid md:grid-cols-3 w-full max-w-screen-2xl">
      {category_array.map((cat, index)=>(
          <Category 
            key={index}
            img={cat.img}
            title={cat.title}
          />
        ))}
      </div>
      <NewArrival/>
      <BigImage/>
      <VideoPage/>
      <div className="grid md:grid-cols-3 max-w-screen-2xl mx-auto w-full gap-8 md:gap-2  md:px-16 mt-20 px-2">
        {blogpost.map((blog,index)=>(
          <BlogPost
            key={index}
            img={blog.img}
            p1={blog.p1}
            heading={blog.heading}
            p2={blog.p2}
          />
        ))}
      </div>
    </div>
  );
}