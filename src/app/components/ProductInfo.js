import Image from "next/image";

import {useDispatch, useSelector} from "react-redux";
import {SliceOpen} from "@/app/provider/redux/toggleSlice";
import {AiFillStar} from "react-icons/ai";

const ProductInfo = () => {
    const dispatch = useDispatch();

    const images = useSelector(state => state.toggle.images);
    const handleImageClick = (index) => {
        dispatch(SliceOpen(index));
    };

    return (
        <div className="flex  flex-col sm:flex-row   items-center justify-between ">
            <div className=" flex  sm:hidden">

            </div>
            <div className="py-6 hidden sm:grid grid-cols-2 w-6/12 gap-3">
                {images.map((imageUrl, index) => (
                    <div key={index} onClick={() => handleImageClick(index)}>
                        <Image src={imageUrl} width={400} height={300} alt="lis"/>
                    </div>
                ))}
            </div>
            <div className="p-13 py-28  lg:fixed top-14 right-1/4 ">
                <h1 className="font-bold">
                    LILL
                </h1>
                <p className="pb-3">
                    Net curtains, Net curtains, 1 pair, white, <br/> 280x250 cm (110x98 ")
                </p>

                <span
                    className="bg-yellow-400 mb-4 border-b-red-700 border-r-4 border-b-4 border-r-red-700 p-2 my-4 text-2xl font-bold">
                    <span className="text-sm">
                        Rs
                    </span> 399

                </span>
                <h1 className="my-4  text-sm">
                Price incl of all taxes
            </h1>
                <div className="flex flex-row">
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                </div>

            </div>


        </div>
    );
};

export default ProductInfo;