import Image from "next/image";

import {useDispatch, useSelector} from "react-redux";
import {SliceOpen} from "@/app/provider/redux/toggleSlice";

import {Carousel} from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ZoomImage from "@/app/components/ZoomImage";
const ProductInfo = () => {
    const dispatch = useDispatch();

    const images = useSelector(state => state.toggle.images);
    const handleImageClick = (index) => {
        dispatch(SliceOpen(index));
    };

    return (
        <div className="flex  flex-col sm:flex-row   items-center justify-between ">
            <div className=" flex  sm:hidden">
                <Carousel showArrows={true}  >
                    {
                        images.map((image, index) => (
                            <ZoomImage key={index} src={image} alt={"Sd"}/>
                        ))
                    }
               </Carousel>
            </div>
            <div className="py-6 hidden sm:grid grid-cols-2 w-6/12 gap-3">
                {images.map((imageUrl, index) => (
                    <div key={index} onClick={() => handleImageClick(index)}>
                        <Image src={imageUrl} width={400} height={300} alt="lis"/>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ProductInfo;