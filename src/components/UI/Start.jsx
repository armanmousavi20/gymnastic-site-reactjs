import React from 'react';
import '../../styles/start.css';
import trainerImg from '../../assets/img/trainer.png';

const Start = () =>
{
	return(<section id="classes">
               <div className="container">
                   <div className="start__wrapper">

                       <div className="start__img">                       
                             <img src={trainerImg} alt="" data-aos='fade-left' data-aos-duration="1500" />
                       </div>

                       <div className="start__content" data-aos='fade-right' data-aos-duration="1500" >
                            <h2 className="section__content">
                                 Ready to make <span className="highlights"> change? </span>
                            </h2>
                            <p>
                                 The key thing to remember about starting an exercise program 
                                 is that something is always better than nothing!!!
                            </p> 
                            <button className="register__btn">
                            	Get Started
                            </button>                           
                       </div>


                   </div>
               </div>
		   </section>);
}

export default Start;