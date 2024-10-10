import React from 'react';
import "./Banner.css"
import image1 from "../../../assets/banner/banner1.jpg"
import image2 from "../../../assets/banner/banner2.jpg"
import image3 from "../../../assets/banner/banner3.jpg"
import image4 from "../../../assets/banner/banner4.jpg"
import image5 from "../../../assets/banner/banner5.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='SliderParent'>
            <div className="slider pt-24">
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="">
                            <img className="w-[100%] h-[600px]" src={image1} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="">
                            <img className="w-[100%] h-[600px]" src={image2} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="">
                            <img className="w-[100%] h-[600px]" src={image3} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="">
                            <img className="w-[100%] h-[600px]" src={image4} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="">
                            <img className="w-[100%] h-[600px]" src={image4} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="">
                            <img className="w-[100%] h-[600px]" src={image5} alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>







        </div >
    );
};

export default Banner;