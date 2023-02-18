import React from 'react';
import HeroImg from '../../assets/img/gym-02.png'
import dumble from '../../assets/img/dumble.png'
import '../../styles/hero.css'


const Hero = () =>{
	return(<section id="home">
		       <div className="container">
		           <div className="hero__wrapper">

		               {/* ============ hero content ================ */}
                        <div className="hero__content">
                             <h2 className="section__title" data-aos='fade-up' 
                                                            data-aos-duration="1500">
                                        Exercise is the key to a 
                                        <span className="highlights"> healthy </span> 
                                        lifeStyle 
                             </h2>
                             <p data-aos='fade-up' data-aos-duration="100" data-aos-duration="1800" >
                             	Exercise is considered the best method to reduce the risk of heart disease,<br />
                             	 cancer, Alzheimer's, and stroke, which are some of the leading causes of death
                             </p>
                             <div className="hero__btns" data-aos='fade-up' data-aos-duration="200" data-aos-duration="2000">
                                 <button className="register__btn"> Get Started </button>
                                 <button className="watch__btn">
                                     <span>
                                           <i class="fa fa-play" aria-hidden="true"></i>                                          
                                     </span>
                                      Watch Video
                                 </button>
                                 
                             </div>
                        </div>


                       {/* ================= hero img ================= */}
                       <div className="hero__img">
                               
                              <div className="hero__img-wrapper">
                                   <div className="box-01">
                                         <div className="box-02">
                                              <div className="box-03">

                                                    <div className="box__img">
                                                       <img src={HeroImg} alt="" />
                                                    </div>

                                              </div>
                                         </div>
                                   </div>


                                   <div className="heart__rate" data-aos='fade-right' data-aos-duration="1500">
                                       <h5> Heart Rate </h5>
                                       <span>
                                            <i class="fa fa-heartbeat" aria-hidden="true"></i>
                                       </span>
                                       <h5> 2567 BPM </h5>
                                   </div>

                                   <div className="gym__location" data-aos='fade-left' data-aos-duration="1500">
                                         <span> <i class="fa fa-map-marker" aria-hidden="true"></i> </span>
                                         <h5> find a new <br /> gym near you </h5>
                                   </div>

                                   <div className="dumble__icon" data-aos='fade-down' data-aos-duration="1500">
                                        <img src={dumble} alt="" />
                                   </div>

                              </div>

                        </div>

		           </div>
		       </div>
	       </section>);
}

export default Hero;