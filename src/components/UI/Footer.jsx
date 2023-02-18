import React  from 'react';
import '../../styles/footer.css';
import logo from '../../assets/img/dumble.png'

const Footer = () =>
{
	const year = new Date().getFullYear();
	return(<footer className="footer" data-aos='fade-up' data-aos-duration="1500">
		        <div className="container">
		            <div className="footer__wrapper">
		                 <div className="footer__box">
		                     <div className="logo">
		                         <div className="logo__image">
		                             <img src={logo} alt="" />
		                         </div>
		                         <h2> fitbody </h2>

		                     </div>
		                     <p>
		                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		                             Ut sit amet urna non massa tincidunt euismod. Quisque tempus volutpat congue. 
		                             Donec commodo ligula a sollicitudin tincidunt. In non ligula vel urna commodo viverra sit amet nec justo.
		                     </p>
		                 </div>


		                 <div className="footer__box">
		                    <h4 className="footer__title"> Company </h4>
		                    <ul className="footer__links">
                               <li> <a href="#"> Our Program  </a> </li>
                               <li> <a href="#"> Our Plan  </a> </li>
                               <li> <a href="#"> Become a member  </a> </li>
 		                    </ul>
		                 </div>

		                 <div className="footer__box">
		                    <h4 className="footer__title"> Quick links </h4>
		                    <ul className="footer__links">
                               <li> <a href="#"> About us  </a> </li>
                               <li> <a href="#"> Contact us  </a> </li>
                               <li> <a href="#"> Support </a> </li>
 		                    </ul>
		                 </div>

		                 <div className="footer__box">
		                    <h4 className="footer__title"> Quick links </h4>
		                    <ul className="footer__links">
                               <li> <a href="#"> About us  </a> </li>
                               <li> <a href="#"> Contact us  </a> </li>
                               <li> <a href="#"> Support </a> </li>
 		                    </ul>
		                 </div>

		            </div>

		            <p className="copyright">
                       @copy right - {year} develope by arman. all right reserved. 
		            </p>

		        </div>
		   </footer>);
}

export default Footer;