"use client"

import { DashboardText } from "@/components/dashboard-text";
import { Carousel } from "@/components/carousel";
import { Category } from "@/components/category-card";
import { NewArrival } from "@/components/new-arrival";
import { BigImage } from "@/components/big-image";
import { VideoPage } from "@/components/video";
import { BlogPost } from "@/components/blog-post";
import { Brands } from "@/components/brands";
import { useEffect, useState } from "react";
import { SplashScreen } from "@/components/splash-screen";;
import { NewsLetter } from "@/components/newsletter";
import { InstaItem } from "@/components/instagram-item";

import Services from "@/components/services";

export default function Home() {

        
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

  const brands = [
    {
      img: "/logo1.png",
    }, 
    {
      img: "/logo2.png",
    },
    {
      img: "/logo3.png",
    },
    {
      img: "/logo4.png",
    },
    {
      img: "/logo5.png",
    },
  ]
  
  const instaitem = [
    {
      img: "/insta-item1.jpg"
    },
    {
      img: "/insta-item2.jpg"
    },
    {
      img: "/insta-item3.jpg"
    },
    {
      img: "/insta-item4.jpg"
    },
    {
      img: "/insta-item5.jpg"
    },
    {
      img: "/insta-item6.jpg"
    },
  ]
  
  return (
    <div className="w-full h-full relative">      {/* <Header/> */}
      <div className={`h-full w-full relative items-center justify-center flex-col`}>
        <DashboardText/>
        <Carousel/>
        <Services/>
        <div className="md:px-16 grid md:grid-cols-3 w-full max-w-screen-2xl">
        {category_array.map((cat, index)=>(
            <Category 
              key={index}
              img={cat.img}
              title={cat.title}
              index={index}
            />
          ))}
        </div>
        <NewArrival/>
        <BigImage/>
        <VideoPage/>
        <div className="grid md:grid-cols-3 max-w-screen-2xl mx-auto w-full gap-8 md:gap-2 md:px-16 mt-20 px-2">
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
        <div className="max-w-screen-2xl mx-auto flex lg:flex-row flex-col md:justify-between items-center mb-4  w-full md:px-16 gap-8 px-2 mt-20">
          {brands.map((brand, index)=>(
            <Brands
            key={index}
            img={brand.img}
            />
          ))}
        </div>
        
        <NewsLetter/>
      <div className="flex flex-col items-center justify-center relative">
        <div className="grid md:grid-cols-6 grid-cols-2 gap-y-4 w-full">
            {instaitem.map((item,index)=>(
              <InstaItem
                key={index}
                img={item.img}
              />
            ))}
          </div>
            <p className="bg-black text-white px-10 py-2 absolute flex -bottom-5 ">Follow us on Instagram</p>
        </div>
      </div>
    </div>
  );
}