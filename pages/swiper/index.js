// import Swiper core and required modules
import { useState } from 'react';
import  SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper';
import{ Swiper, SwiperSlide }from 'swiper/react';
import NormalSwiper from '../../components/normalSwiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/thumbs";
import styles from './swiper.module.css';



function SwiperTemplate() {
    var menu = ['Slide 1', 'Slide 2', 'Slide 3'];
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            {/* <div
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
            </div> */}
            <div
                style={{
                    width: '500px',
                    marginTop: '50px',
                    marginBottom: '100px',
                }}
            >
                <Swiper
                    id='main'
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    modules={[Navigation, Thumbs]}
                    // watchSlidesProgress={true}
                    // spaceBetween={0}
                    slidesPerView={1}
                    className="imgSwiper"
                >
                    <SwiperSlide>
                        <div className={styles.imgWrap}>
                            <img src='images/img1.jpg' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.imgWrap}>
                            <img src='images/img2.jpg' />
                        </div>
                    </SwiperSlide>

      
                </Swiper>
                <Swiper
                    id='thumbs'
                    onSwiper={setThumbsSwiper}
                    modules={[Navigation, Thumbs]}
                    spaceBetween={2}
                    slidesPerView={2}
                    className={`mt-5 ${styles.imgSwiperThumbs}`}
                >
                    <SwiperSlide className={styles.thumbSlide}>
                    
                            <img src='images/img1.jpg' className={styles.thumbImg}/>
                        
                    </SwiperSlide>
                    <SwiperSlide className={styles.thumbSlide}>
                      
                            <img src='images/img2.jpg' className={styles.thumbImg}/>
                 
                    </SwiperSlide>
                    

             
                </Swiper>
            </div>
        </>
    );
}

export default SwiperTemplate;
