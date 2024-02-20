"use client"

;

import ProductInfo from "@/app/components/ProductInfo";
import { useSelector } from "react-redux";
import ImageSlider from "@/app/components/ImageSlider";

export default function Home() {
    const state = useSelector((state) => state.toggle.isSliceOpen);



    return (
        <div className="relative mx-8 ">
            <div className={`lg:ml-24 ${state ? 'filter grayscale blur-lg' : ''}`}>
                <ProductInfo/>
            </div>
            <div className={`absolute rounded-2xl shadow-2xl top-9 left-0 right-0 ${state ? '' : 'hidden'}`}>
                <ImageSlider/>
            </div>
        </div>
    );
}
