import React from 'react';
// import {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import AllProducts from './AllProducts';
import SeasonSale from './Season-Sale';

function Home () {

    const sliderImg = ['slider1.png','slider2.jpg', 'slider3.avif', 'slider4.avif', 'slider5.png']

    return(
        <div className='home-sec'>
            <Container maxWidth='xxl'>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <div className='banner'>
                        <div className='banner-slider'>
                            <Swiper
                                direction={'vertical'}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                clickable: true
                                }}
                                modules={[Pagination, Autoplay]}
                                className="mySwiper"
                            >

                                {
                                    sliderImg.map((img, index) => (
                                        <SwiperSlide key={index}>
                                            <img alt={img} src={require(`../assets/images/slider/${img}`)} />
                                        </SwiperSlide>
                                    ))
                                }
                                
                                {/* <SwiperSlide>Slide 2</SwiperSlide>
                                <SwiperSlide>Slide 3</SwiperSlide>
                                <SwiperSlide>Slide 4</SwiperSlide>
                                <SwiperSlide>Slide 5</SwiperSlide>
                                <SwiperSlide>Slide 6</SwiperSlide>
                                <SwiperSlide>Slide 7</SwiperSlide>
                                <SwiperSlide>Slide 8</SwiperSlide>
                                <SwiperSlide>Slide 9</SwiperSlide> */}
                            </Swiper>
                        </div>

                        <div className='banner-advertise'>
                            <div>
                                <img alt='...' src={require(`../assets/images/slider/adv1.jpeg`)} />
                            </div>
                            <div>
                                <img alt='...' src={require(`../assets/images/slider/adv2.jpg`)} />
                            </div>
                        </div>
                    </div>

                    <SeasonSale/>

                    <AllProducts/>
                </Box>    
            </Container>
        </div>
    )
}

export default Home;
