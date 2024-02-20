import React from 'react';
import Image from "next/image";
import {IoMdMenu, IoMdSearch} from "react-icons/io";
import {IoBasketOutline, IoCameraOutline} from "react-icons/io5";
import {GoPerson} from "react-icons/go";
import {FaRegHeart} from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="py-6 flex flex-row gap-10">
            <Image src={"https://www.ikea.com/in/en/static/ikea-logo.f7d9229f806b59ec64cb.svg"} height={100} width={100} alt={"logo"}/>
            <div className="rounded-3xl hidden w-11/12 font-light items-center bg-gray-100 px-4 p-2 gap-4 sm:flex flex-row">
                <IoMdSearch size={22} />
                <h1 className="mr-auto">
                    What are you looking for?
                </h1>
                <IoCameraOutline size={22} />



            </div>

            <div className="flex items-center flex-row gap-6">
                <GoPerson size={22}/>
                <FaRegHeart  size={22} />
                <IoBasketOutline  size={22} />
                <IoMdMenu   size={22}/>
            </div>

        </nav>
    );
};

export default Navbar;