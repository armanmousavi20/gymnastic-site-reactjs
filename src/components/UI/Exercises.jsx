import React from 'react';
import '../../styles/exercises.css';
import lunges from "../../assets/img/lunges.png";
import yoga from "../../assets/img/yoga-pose.png";
import extended from "../../assets/img/extended.png";


const Exercises = () =>
{
	return(<section id="schedule">
		         <div className="container exercise__container">
                       <div className="exercise__top">
                             <h2 className="section__title">                             
                                   Benefits of 
                                   <span className="highlights"> Exercise </span>                                   
                             </h2>
                             <p>
                                improve your brain health, help manage weight, reduce the risk of disease,<br />
                                 strengthen bones and muscles, and improve your ability to do everyday activities
                             </p>
                       </div>

                    {/*--------------------- exercise list --------------------------- */}
                    <div className="exercise__wrapper">

                         <div className="exercise__item" data-aos='zoom-in' data-aos-duration="1500">
                            <span className="exercise__icon">
                                 <img src={yoga} alt="" />
                            </span>
                            
                            <div className="exercise__content">
                                 <h4> increase flexibility </h4> 
                                 <p>
                                       yoga focuses your attention on your body's <br />
                                 </p>                                
                            </div>
                         </div> 

                         <div className="exercise__item" data-aos='zoom-in' data-aos-duration="1500">
                            <span className="exercise__icon">
                                 <img src={lunges} alt="" />
                            </span>
                            
                            <div className="exercise__content">
                                 <h4> healthy life  </h4> 
                                 <p>
                                      Lunges are a powerful exercise, <br /> allowing you to shape muscles 
                                     
                                 </p>                                
                            </div>
                         </div> 

                        
                        <div className="exercise__item" data-aos='zoom-in' data-aos-duration="1500">
                            <span className="exercise__icon">
                                 <img src={extended} alt="" />
                            </span>
                            
                            <div className="exercise__content">
                                 <h4> Reducing blood pressure </h4> 
                                 <p>
                                      extension exercises improve the stability 
                                       and strength of your muscles
                                 </p>                                
                            </div>
                         </div> 


                    </div>
		         </div>
		   </section>);
}

export default Exercises;