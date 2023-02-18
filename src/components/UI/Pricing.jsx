import React from 'react';
import '../../styles/pricing.css'

const Pricing = () =>
{
	return(<section>
		         <div id="pricing-plan" className="container">
		              <div className="pricing__top">
		                   <h2 className="section__title">
		                        Gym
		                        <span className="highlights"> Pricing </span>
		                        Plan
		                   </h2>
		                   <p>
		                       gyms were separated into two established pricing categories: <br />
		                       budget gym and elite fitness clubs, <br />
		                       leaving these two genres to price themselves
		                   </p>
		              </div>


		          {/*================== pricing wrapper ==================== */}
		             <div className="pricing__wrapper">

		                  <div className="pricing__item" data-aos='fade-up' data-aos-duration="1500" >
		                       <div className="pricing__card-top">
		                           <h2 className="section__title"> Premium member </h2>
		                           <h2 className="pricing section__title">
		                                $100 <span> /month </span> 
		                           </h2>
		                       </div>

		                       <div className="services">
		                           <ul>
		                               <li> <span> <i class="fa fa-circle" aria-hidden="true"></i> </span> 
		                                      unlimited Access to the gym
		                               </li>
		                               <li> <span> <i class="fa fa-circle" aria-hidden="true"></i> </span> 
                                              Customer support
		                               </li>
		                               <li> <span> <i class="fa fa-circle" aria-hidden="true"></i> </span> 
                                            Personal trainer
		                               </li>
		                               <li> <span> <i class="fa fa-circle" aria-hidden="true"></i> </span> 
                                            Standard Options
		                               </li>
		                               <li> <span> <i class="fa fa-circle" aria-hidden="true"></i> </span> 
                                            5 classes per week
		                               </li>
		                           </ul>
		                           <button className="register__btn">
		                                Join Now
		                           </button>
		                       </div>
		                  </div>



		                  <div className="pricing__item pricing__item-02" data-aos='fade-up' data-aos-duration="1800">
		                       <div className="pricing__card-top">
		                           <h2 className="section__title"> Standard member </h2>
		                           <h2 className="pricing section__title">
		                                $70 <span> /month </span> 
		                           </h2>
		                       </div>

		                       <div className="services">
		                           <ul>
		                               <li> <span> <i class="fa fa-circle" aria-hidden="true"></i> </span> 
		                                      unlimited Access to the gym
		                               </li>
		                               <li> <span> <i class="fa fa-circle" aria-hidden="true"></i> </span> 
                                              Customer support
		                               </li>
		                               <li> <span> <i class="fa fa-circle" aria-hidden="true"></i> </span> 
                                            Personal trainer
		                               </li>
		                               <li> <span> <i class="fa fa-circle" aria-hidden="true"></i> </span> 
                                            Standard Options
		                               </li>
		                               <li> <span> <i class="fa fa-circle" aria-hidden="true"></i> </span> 
                                            5 classes per week
		                               </li>
		                           </ul>
		                           <button className="register__btn">
		                                Join Now
		                           </button>
		                       </div>
		                  </div>


		                 <div className="pricing__item" data-aos='fade-up' data-aos-duration="2000">
		                       <div className="pricing__card-top">
		                           <h2 className="section__title"> Regular member </h2>
		                           <h2 className="pricing section__title">
		                                $50 <span> /month </span> 
		                           </h2>
		                       </div>

		                       <div className="services">
		                           <ul>
		                               <li> <span> <i class="fa fa-circle" aria-hidden="true"></i> </span> 
		                                      unlimited Access to the gym
		                               </li>
		                               <li> <span> <i class="fa fa-circle" aria-hidden="true"></i> </span> 
                                              Customer support
		                               </li>
		                               <li> <span> <i class="fa fa-circle" aria-hidden="true"></i> </span> 
                                            Personal trainer
		                               </li>
		                               <li> <span> <i class="fa fa-circle" aria-hidden="true"></i> </span> 
                                            Standard Options
		                               </li>
		                               <li> <span> <i class="fa fa-circle" aria-hidden="true"></i> </span> 
                                            5 classes per week
		                               </li>
		                           </ul>
		                           <button className="register__btn">
		                                Join Now
		                           </button>
		                       </div>
		                  </div>




		             </div>
		         </div>
		   </section>);
}

export default Pricing;