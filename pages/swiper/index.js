// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './swiper.module.css'

function SwiperTemplate() {

    var menu = ['Slide 1', 'Slide 2', 'Slide 3']

    return (
        <>
            <div style={{ width: '500px', marginTop: '50px' }}>
                <Swiper
                    // install Swiper modules
                    modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ el: '.swiper-pagination', clickable: true,
                    renderBullet: function (index, className) {
                        return `
                        <div class=${className}>
                            <div class="txt">0${index+1}</div>
                            <div class='bar'></div>
                        </div>`;
                      },
                    }}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                  
                <div className="swiper-pagination" style={{ marginTop: '50px', position: 'relative'}}></div>
                </Swiper>
                {/* <div className={styles.fixContent}>
                    <ol className={styles.carouselIndicators}>
                        <li >
                            <div className={styles.txt}>01</div>
                            <div className={styles.bar}></div>
                        </li>
                        <li>                                            
                            <div className={styles.txt}>02</div>
                            <div className={styles.bar}></div>
                        </li>
                    </ol>
                </div> */}
            </div>
        </>
    );
}

export default SwiperTemplate;
