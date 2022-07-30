import React from 'react';
import { useState } from 'react';
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';
import styles from './normalSwiper.module.css';

export default function NormalSwiper() {
    return (
        <div>
            {' '}
            <div
                style={{
                    width: '500px',
                    marginTop: '50px',
                    marginBottom: '100px',
                }}
            >
                <Swiper
                    // install Swiper modules
                    modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{
                        el: '.swiper-pagination',
                        clickable: true,
                        renderBullet: function (index, className) {
                            return `
            <div class=${className}>
                <div class="txt">0${index + 1}</div>
                <div class='bar'></div>
            </div>`;
                        },
                    }}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>

                    <div
                        className='swiper-pagination'
                        style={{ marginTop: '50px', position: 'relative' }}
                    ></div>
                </Swiper>
            </div>
        </div>
    );
}
