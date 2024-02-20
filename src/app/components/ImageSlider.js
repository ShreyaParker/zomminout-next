import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import {Navigation, Pagination} from 'swiper/modules';


import ZoomImage from "@/app/components/ZoomImage";
import {useDispatch, useSelector} from "react-redux";
import {SliceClose} from "@/app/provider/redux/toggleSlice";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";

const ImageSlider = () => {
    const dispatch = useDispatch();
    const selectedImageIndex = useSelector(state => state.toggle.selectedImageIndex);
    const images = useSelector(state => state.toggle.images);
    if (selectedImageIndex === null) return null;
      return (
          <div className="flex p-5 bg-white flex-col">
              <button
                  className="flex justify-end"
                  onClick={() => {
                  dispatch(SliceClose())

              }}>
                  <CloseIcon/>
              </button>

              <Swiper pagination={{
                  type: 'scrollbar',
              }}
                      navigation={true}
                      modules={[Pagination, Navigation]}
                      initialSlide={selectedImageIndex}
                      className="bg-gray-200  p-20  rounded-lg ">


                  {images.map((imageUrl, index) => (
                      <SwiperSlide key={index}>
                          <div className="relative z-10">
                              <div className='z-20 h-11/12 rounded-2xl justify-center flex bg-cover duration-500'>
                                  <ZoomImage src={imageUrl} />
                              </div>
                          </div>
                      </SwiperSlide>
                  ))}

              </Swiper>

          </div>
      );
};

export default ImageSlider;