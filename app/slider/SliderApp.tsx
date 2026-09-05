"use client"

import Image from "next/image";
import { useEffect, useRef, useState } from "react";


interface Banner {
    id: number;
    src: string;
    alt: string;
}


export default function SliderApp() {

    const [currentIdx, setCurrentIdx] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);


    const banners: Banner[] = [
        { id: 1, src: '/img1.jpg', alt: 'Banner 1' },
        { id: 2, src: '/img2.jpg', alt: 'Banner 2' },
        { id: 3, src: '/img3.jpg', alt: 'Banner 3' },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIdx(prevIdx => {
                return (prevIdx + 1) % banners.length;
            });
        }, 1500);

        return () => {
            clearInterval(interval);
        };
    }, [banners.length]);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            const containerWidth = container.clientWidth;
            container.scrollTo({
                left: containerWidth * currentIdx,
                behavior: "smooth"
            });
        }
    }, [currentIdx]);

    return (
        <div className="w-full text-center ">
            <h1>슬라이더</h1>

            <div className="relative w-6/10 h-100 overflow-hidden rounded-lg shadow-lg border-1 mx-auto mt-5 w-8/10" >
                <div
                    ref={scrollContainerRef}
                    className={`flex overflow-x-hidden scroll-smooth snap-x snap-mandatory no-scrollbar h-full `}
                >

                    {banners && banners.map(banner => (
                        <div 
                            key={banner.id}
                            className="w-full flex-shrink-0 snap-center h-full">
                            <Image 
                                src={banner.src}
                                alt={banner.alt}
                                loading="eager"
                                width={1024}
                                height={0}
                                className={"w-full h-full object-cover"}
                                
                            />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}