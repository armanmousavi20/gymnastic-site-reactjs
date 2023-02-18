import React ,{ useRef , useEffect } from 'react';
import '../../styles/header.css';
import logo from '../../assets/img/dumble.png'

const nav__links = [ {path:'#home' , display:'Home' } ,
                     {path:'#schedule' , display:'Schedule' } ,
                     {path:'#classes' , display:'Classes' } ,
                     {path:'#pricing-plan' , display:'Pricing' } ,
                  ];


const Header = () =>
{
    const headerRef = useRef(null);
const headerFunc = () =>{
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 )
    {
        headerRef.current.classList.add('sticky__header');        
    }else{
                headerRef.current.classList.remove('sticky__header');        
    }
}


useEffect( () => {
                   window.addEventListener('scroll' , headerFunc);
                   return () => window.removeEventListener('scroll' , headerFunc);
                 } ,[]);

const hendleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;
    window.scrollTo({
        left : 0 ,
        top : location - 80 ,
    }) 
}

	return(<header className="header" ref={headerRef}>           
              <div className="container">
                 <div className="nav__wrapper">

                  {/*logo part */}
                    <div className="logo">
                       <div className="logo__image">
                           <img src={logo} alt="" />
                           <h2> fitBody </h2>
                       </div>
                    </div>
                  {/*end logo part*/}


                {/* navigation menu */}
                <div className="Navigation">
                    <ul className="menu">
                          { nav__links.map( (item , index) => (<li className="nav__item" key={index}>
                          	                              <a onClick={hendleClick} href={item.path}>
                          	                                   { item.display }
                          	                              </a>
                                                      </li>))}
                    </ul>
                </div>

                {/*---------- nav right ------------- */}
                <div className="nav__right">
                    <button className="register__btn"> Register </button>
                    <span className="mobile__menu">
                       <i className="fa fa-bars" aria-hidden="true"></i>
                    </span>
                </div>

                 </div>
               </div>
           </header>);
}


export default Header;