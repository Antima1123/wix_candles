"use client"
import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = () => {
 const elementRef = useRef<HTMLDivElement | null>(null);
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
   const observer = new IntersectionObserver(
     ([entry]) => {
       // Trigger when the element is at least 5% visible
       setIsVisible(entry.isIntersecting);
     },
     { threshold: 0.05 } // Trigger when 5% of the element is visible
   );

   if (elementRef.current) {
     observer.observe(elementRef.current);
   }

   // Cleanup observer on component unmount
   return () => {
     if (elementRef.current) {
       observer.unobserve(elementRef.current);
     }
   };
 }, []);
 
 return { elementRef, isVisible };
};

export default useIntersectionObserver;
