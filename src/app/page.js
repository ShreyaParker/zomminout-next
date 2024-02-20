"use client"

import Navbar from "@/app/components/Navbar";

import ProductInfo from "@/app/components/ProductInfo";
import { useSelector } from "react-redux";
import ImageSlider from "@/app/components/ImageSlider";
import {LuTruck} from "react-icons/lu";
import {LiaStoreAltSolid} from "react-icons/lia";

export default function Home() {
    const state = useSelector((state) => state.toggle.isSliceOpen);


    return (
        <div className="relative mx-8 ">
            <div className="lg:ml-24">
                <Navbar/>
                <div className="border-b-100 items-center gap-1 flex flex-row border-b-2 pb-6 py-2">
                    <LuTruck size={22}/>
                    <h1 className="mr-auto">
                        Enter postal code

                    </h1>
                    <LiaStoreAltSolid size={22}/>
                    <h1>
                        SelectStore
                    </h1>
                </div>
                <ProductInfo/>
            </div>
            <div className={`absolute top-9 left-0 right-0 ${state ? '' : 'hidden'}`} style={{cursor: 'url(magnifying_glass_cursor.png), auto'}}>
                <ImageSlider/>
            </div>
        </div>
    );
}
