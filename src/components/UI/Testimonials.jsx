import React from 'react';
import '../../styles/testimonial.css';
import { Swiper , SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper';
import avatar01 from '../../assets/img/avatar01.png'
import avatar02 from '../../assets/img/avatar02.png'
 
const Testimonials = () =>
{
	return(<section>
		       <div className="container sliders">
		            <h2 className="section__title">
		                Testimonials
		            </h2>
                     <Swiper effect={"cards"}
                             grabCursor={true}
                             modules={[EffectCards]}
                             className="mySwiper">
                             <SwiperSlide> 
                                 <div className="slide__item">
                                      <div className="slide__img01">
                                           <img src={avatar01} alt="" />
                                      </div>
                                      <h4> Jesica Alba </h4>
                                      <p>
                                          Exercise not only changes your body, it changes your mind, your attitude and your mood

                                      </p>
                                 </div>
                              </SwiperSlide>
                             <SwiperSlide> 

                                 <div className="slide__item">
                                      <div className="slide__img02">
                                           <img src={avatar02} alt="" />
                                      </div>
                                      <h4> Jesica Alba </h4>
                                      <p>
                                          Exercise not only changes your body, it changes your mind, your attitude and your mood

                                      </p>
                                 </div>
                              </SwiperSlide>

                             <SwiperSlide>

                                 <div className="slide__item">
                                      <div className="slide__img03">
                                           <img src={avatar01} alt="" />
                                      </div>
                                      <h4> Jesica Alba </h4>
                                      <p>
                                          Exercise not only changes your body, it changes your mind, your attitude and your mood

                                      </p>
                                 </div>
                               </SwiperSlide>

                     </Swiper>
		       </div>		      
		   </section>)
}

export default Testimonials;