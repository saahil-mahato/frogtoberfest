import React, { Fragment, useEffect} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


import Logo from 'assets/images/logo.svg';

const SiteHeader = () => {
    useEffect(()=> {
        // Mobile menu Drawer
        const toggleMenu = () => {
          const menu = document.querySelector('.nav');
          const overlay = document.querySelector('.overlay');
    
          menu.classList.toggle('is-active');
          if(overlay!==null){
              overlay.classList.toggle('is-active');    
            }
        };
    
        const buttons = document.querySelectorAll('.menu-toggle, .overlay, .menu-close');
    
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].addEventListener('click', toggleMenu);
        }
    
        // Header Sticky
        window.addEventListener('scroll', () => {
          const header = document.querySelector('header');
          if (window.scrollY > 200) {
            header.classList.add('sticky');
          } else {
            if(header.classList){
                header.classList.remove('sticky');
            }
          }
        });
      },[]);
    return (
        <Fragment>
            <header className='header pt-6x pt-md-12x'>
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">

                        <div className="logo">
                            <figure>
                            <a className='nav__link' href="/">
                                <img src={Logo} alt="Frogtoberfest Logo" />
                                </a>
                            </figure>
                        </div>
                        <nav className='nav p-6x pt-10x p-lg-0x'>
                            <ul className='d-flex flex-column flex-lg-row gap-x-lg-12x gap-y-6x'>
                                <li className='nav__item'><a className='nav__link' href="#participation">Participation</a></li>
                                <li className='nav__item'><a className='nav__link' href="https://frogtoberfest-leaderboard.lftechnology.com/" target="_blank">Leaderboard</a></li>
                                <li className='nav__item'><Link className='nav__link' to="/checker">Checker</Link></li>
                                <li className='nav__item'><a className='nav__link' href="#swag">SWAG</a></li>
                                <li className='nav__item'><a className='nav__link' href="#faq">FAQs</a></li>
                            </ul>

                            <button className="menu-close d-lg-none">
                                <span className="bar"></span>
                                <span className="bar"></span>
                            </button>
                        </nav>

                        <button className="menu-toggle">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </button>
                    </div>
                </div>
            </header>
        </Fragment>
    );
};

export default SiteHeader;
