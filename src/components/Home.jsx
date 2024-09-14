import React from 'react';
// import {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import SeasonSale from './Season-Sale';

function Home () {

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
                                <SwiperSlide>Slide 1</SwiperSlide>
                                <SwiperSlide>Slide 2</SwiperSlide>
                                <SwiperSlide>Slide 3</SwiperSlide>
                                <SwiperSlide>Slide 4</SwiperSlide>
                                <SwiperSlide>Slide 5</SwiperSlide>
                                <SwiperSlide>Slide 6</SwiperSlide>
                                <SwiperSlide>Slide 7</SwiperSlide>
                                <SwiperSlide>Slide 8</SwiperSlide>
                                <SwiperSlide>Slide 9</SwiperSlide>
                            </Swiper>
                        </div>

                        <div className='banner-advertise'>
                            <div>

                            </div>
                            <div>

                            </div>
                        </div>
                    </div>

                    <SeasonSale/>
                </Box>    
            </Container>
        </div>
    )
}

export default Home;
