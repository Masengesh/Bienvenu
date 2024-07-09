
import React from 'react';
import './App.css';
import styles from './style.css'
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Swiper from 'swiper';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { FaArrowUp, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Contact from './component/contact';
import DarkMode from './component/DarkMode';





function App() {
    useEffect (() => {
        Aos.init({duration: 3000 });
    }, [])

    ScrollReveal().reveal('.reveal', {
        delay: 300,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
      });
      
      // Initialize Swiper
      new Swiper('.swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
      });


  return (
    <div className="App">
            <header class="header" id="header">
                <nav class="nav__container">
                    <a href="#" class="nav__logo"><img src="https://res.cloudinary.com/dq9rrrsgx/image/upload/v1708586400/tutorialll_pgralu.png" alt="bienvenu"/>  </a>
                    <div class="nav__menu" id="nav-menu">
                        <ul class="nav__list grid">
                            <li class="nav__item">
                                <a href="#home" class="nav__link">
                                    <i class="ri-home-5-line"></i>Home
                                </a>
                            </li>
                            <li class="header__nav__item">
                                <a href="#skills" class="nav__link">
                                    <i class="ri-trophy-line"></i>Skills
                                </a>
                            </li>
                            <li class="header__nav__item">
                                <a href="#qualification" class="nav__link">
                                    <i class="ri-book-open-line"></i>Qualification
                                </a>
                            </li>
                            <li class="header__nav__item">
                                <a href="#services" class="nav__link">
                                    <i class="ri-briefcase-line"></i>Services                
                                </a>    
                            </li>
                            <li class="header__nav__item">
                                <a href="#projects" class="nav__link">
                                    <i class="ri-image-line"></i>projects   
                                </a>
                            </li>
                            <li class="header__nav__item">
                                <a href="#contact" class="nav__link">
                                    <i class="ri-chat-3-line"></i>Contact Me    
                                </a>
                            </li>
                        </ul>
                         

                        <div class="nav__close" id="nav-close">
                            <i class="ri-close-line"></i>
                        </div>
                    </div>
                    <div class="nav__button">
                        <DarkMode />
                    </div>
                    <div class="nav__taggle" id="nav-taggle">
                        <i class="ri-menu-4-line"></i>
                    </div>
                </nav>
            </header>
                 
            <main class="main">
                <section class="home section" id="home">
                    <div class="home__container container grid amazing">
                        <div class="home__data grid">
                            <h1 class="home__title" data-aos = "fade-right">Hi, I'am Bienvenu <br/>
                                Fronted Developer <br/>
                                Based In Kampala.<br/>
                            </h1>
                            <div class="home__blob grid">
                                <div class="home__perfil" data-aos = "fade-up">
                                    <img src="https://res.cloudinary.com/dq9rrrsgx/image/upload/v1708586400/tutorialll_pgralu.png" alt="home Profile" data-aos = "fade-down"/>
                                </div>
                            </div>
                            <ul class="home__social">
                                <a href="https://www.linkedin.com/in/bienvenu-masengesho " rel="_blank" class="home__social-link linkedin">
                                    <i class="ri-linkedin-box-line"></i>
                                </a>
                                <a href="https://www.github.com/Masengesh" rel="_blank" class="home__social-link github">
                                    <i class="ri-github-line"></i>
                                </a>
                                <a href="https://www.instagram.com/bienvenumasengesho/" rel="_blank" class="home__social-link instagram">
                                    <i class="ri-instagram-line"></i>
                                </a>
                            </ul>
                        </div>
                        

                        <div class="home__info" data-aos = "fade-right">  
                            <div>
                                <h3 class="home__info-title">Biograph</h3>
                                <p class="home__info-description">Hi I'm Bienvenu Masengesho<br/> Frontend 
                                    Developer <br/>Passionet About Designing Beautiful Web <br/>
                                    Interfaces Based in Kampala
                                </p>
                            </div>
                            <div>
                                <h3 class="home__info-title">Contact</h3>
                                <p class="home__info-description">
                                    Kampala, Uganda<br/>
                                   bientobienvenu@gmail.com<br/>
                                   +256773515447<br/>
                                </p>
                           </div>
                           <div>
                                <h3 class="home__info-title">Services</h3>
                                <p class="home__info-description">Designing<br/>Implementation<br/>
                                Maintenance<br/>Marketing</p>
                           </div>
                        </div>
                        

                        <div class="home__info" data-aos = "fade-left">
                            <div>
                                <h3 class="home__info-title">
                                    years of experience
                                </h3>
                                <p class="home__info-number">
                                    01+
                                </p>
                            </div>
                            <a href="#projects">
                                <h3 class="home__info-title">
                                    Completed  project
                                </h3>
                                <p class="home__info-number">
                                    7+
                                </p>
                            </a>
                            <div>
                                <h3 class="home__info-title">
                                    Companie worked
                                </h3>
                                <p class="home__info-number">
                                    01+
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                

                <section class="skills section" id="skills">
                    <h2 class="section__title">skills</h2>
                    <span class="section__subtitle">My favorite skills</span>

                    <div class="skills__container container grid amazing">
                       
                        <div class="skills__content">
                            <h3 class="skills__title">
                                <i class="ri-braces-line"></i>Frontend Developer
                            </h3>
                            <div class="skills__info">
                                <div class='skills__infos'>
                                <div class="skills__data" data-aos = "fade-up" >
                                    <div class="skills__blob">
                                        <img src="https://res.cloudinary.com/dq9rrrsgx/image/upload/v1708465798/html-logo_xrinlq.png" alt="skills"/>
                                    </div>
                                    <h3 class="skills__name">HTML</h3>
                                    <span class="skills__subtitle">Intermediate</span>
                                </div>
                                <div class="skills__data">
                                    <div class="skills__blob">
                                        <img src="https://res.cloudinary.com/dq9rrrsgx/image/upload/v1708465792/css-logo_dodva3.png" alt="skills"/>
                                    </div>
                                    <h3 class="skills__name">CSS</h3>
                                    <span class="skills__subtitle">Advanced</span>
                                </div>
                                <div class="skills__data" data-aos = "fade-up" >
                                    <div class="skills__blob">
                                        <img src="https://res.cloudinary.com/dq9rrrsgx/image/upload/v1708465802/sass-logo_knboyx.png" alt="skills "/>
                                    </div>
                                    <h3 class="skills__name">SCSS</h3>
                                    <span class="skills__subtitle">Intermediate</span>
                                </div>
                                <div class="skills__data" data-aos = "fade-up" >
                                    <div class="skills__blob">
                                        <img src="https://res.cloudinary.com/dq9rrrsgx/image/upload/v1708465798/gthb_m9oh3h.png" alt="skills"/>
                                    </div>
                                    <h3 class="skills__name">GitHub</h3>
                                    <span class="skills__subtitle">Advanced</span>
                                </div>
                                <div class="skills__data" data-aos = "fade-up" >
                                    <div class="skills__blob">
                                        <img src="https://res.cloudinary.com/dq9rrrsgx/image/upload/v1708465799/Java_c2hunq.png" alt="skills"/>
                                    </div>
                                    <h3 class="skills__name">Java Script</h3>
                                    <span class="skills__subtitle">Intermediate</span>
                                </div>
                                <div class="skills__data" data-aos = "fade-up" >
                                    <div class="skills__blob">
                                        <img src="https://res.cloudinary.com/dq9rrrsgx/image/upload/v1708465792/figma_sevkys.png" alt="skills"/>
                                    </div>
                                    <h3 class="skills__name">Figma</h3>
                                    <span class="skills__subtitle">Intermediate</span>
                                </div>
                                <div class="skills__data" data-aos = "fade-up" >
                                    <div class="skills__blob">
                                        <img src="https://res.cloudinary.com/dq9rrrsgx/image/upload/v1708587286/mongodb_api9c1.png" alt="skills"/>
                                    </div>
                                    <h3 class="skills__name">MongoDB</h3>
                                    <span class="skills__subtitle">Intermediate</span>
                                </div>
                                <div class="skills__data" data-aos = "fade-up" >
                                    <div class="skills__blob">
                                        <img src="https://res.cloudinary.com/dq9rrrsgx/image/upload/v1708587275/nodejs_ttqeee.png" alt="skills"/>
                                    </div>
                                    <h3 class="skills__name">Node js</h3>
                                    <span class="skills__subtitle">Intermediate</span>
                                </div>
                                <div class="skills__data" data-aos = "fade-up" >
                                    <div class="skills__blob">
                                        <img src="https://res.cloudinary.com/dq9rrrsgx/image/upload/v1708930579/next-JS-framework_uoghsg.png" alt="skills"/>
                                    </div>
                                    <h3 class="skills__name">Nextjs</h3>
                                    <span class="skills__subtitle">Intermediate</span>
                                </div>
                                <div class="skills__data" data-aos = "fade-up" >
                                    <div class="skills__blob">
                                        <img src="https://res.cloudinary.com/dq9rrrsgx/image/upload/v1708930578/react_wnf4r3.png" alt="skills"/>
                                    </div>
                                    <h3 class="skills__name">React</h3>
                                    <span class="skills__subtitle">Intermediate</span>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                

                <section class="qualification section" id="qualification">
                    <h2 class="section__title">Qualification</h2>
                    <span class="section__subtitle">Experience & Education</span>
                    <div class="qualification__container container grid amazing">
                        
                        <div class="qualification__content" data-aos = "fade-right">
                            <h3 class="qualification__title">
                                <i class="ri-pencil-ruler-2-line"></i>Education
                            </h3>
                            <div class="qualification__info">
                                <div>
                                    <h3 class="qualification__name">
                                        Advanced In Construction Technology
                                    </h3>
                                    <span class="qualification__country">Rwanda - Technical School</span>
                                    <span class="qualification__year">2014 - 2017</span>
                                </div>
                                <div>
                                    <h3 class="qualification__name">
                                        Responsive Web Design
                                    </h3>
                                    <span class="qualification__country">Uganda - freeCodeCamp</span>
                                    <span class="qualification__year">2021 - 2022</span>
                                </div>
                                <div>
                                    <h3 class="qualification__name">
                                         CSS Designer
                                    </h3>
                                    <span class="qualification__country">Uganda - OpenClassroom</span>
                                    <span class="qualification__year">2022 - Present</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="qualification__content" data-aos = "fade-left">
                            <h3 class="qualification__title">
                                <i class="ri-building-line"></i>Work
                            </h3>
                            <div class="qualification__info">
                                <div>
                                    <h3 class="qualification__name">
                                    HTML & SCSS Design
                                    </h3>
                                    <span class="qualification__country">AIK - Kampala</span>
                                    <span class="qualification__year">2022</span>
                                </div>
                                <div>
                                    <h3 class="qualification__name">
                                    Programing With JavaScript
                                    </h3>
                                    <span class="qualification__country">Asante Sana - Kampala</span>
                                    <span class="qualification__year">2023</span>
                                </div>
                                <div>
                                    <h3 class="qualification__name">
                                        Full-Stack Development
                                    </h3>
                                    <span class="qualification__country">AIK - Kampala</span>
                                    <span class="qualification__year">2023 - Present </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section class="services section" id="services">
                    <h2 class="section__title">Servise</h2>
                    <span class="section__subtitle">What i Offer</span>
                    <div class="service__container container grid amazing">
                        <div class="service__card" data-aos = "fade-right">
                            <img src='https://res.cloudinary.com/dq9rrrsgx/image/upload/v1708930578/design_web_zseker.webp' alt=''/>
                            <h2 class="services__title">
                            Design and Planning
                            </h2>
                            <p class="services__description">
                            Requirements Gathering,<br/> Design Documents, <br/>Architecture Design,<br/>
                            Technology Selection
                            </p>
                            <div class="services__border"></div>
                        </div>
                        <div class="service__card" data-aos = "fade-up">
                            <img src='https://res.cloudinary.com/dq9rrrsgx/image/upload/v1708930578/implementation_matbrm.jpg' alt='implementation'/>
                            <h2 class="services__title">
                            Implementation
                            </h2>
                            <p class="services__description">
                            Programming, <br/>Testing,
                            Debugging, <br/>Integration, <br/>Version Control
                            </p>
                            <div class="services__border"></div>
                        </div>
                        <div class="service__card" data-aos = "fade-down">
                            <img src='' alt=''/>
                            <h2 class="services__title">
                            Maintenance and Optimization
                            </h2>
                            <p class="services__description">
                            Bug Fixing,<br/> Feature Updates,<br/>
                            Performance Optimization, <br/>Security Updates, <br/>User Support, 
                            </p>
                            <div class="services__border"></div>
                        </div>
                        <div class="service__card" data-aos = "fade-left">
                            <img src='https://res.cloudinary.com/dq9rrrsgx/image/upload/v1708933141/marketing_zwsaiz.png' alt='digital marketing'/>
                            <h2 class="services__title">
                            Digital Marketing
                            </h2>
                            <p class="services__description">
                            Socia Media promoting,<br/> Email Template,<br/>
                            Broad Casting,  
                            </p>
                            <div class="services__border"></div>
                        </div>
                    </div>
                </section>
                
                <section class="project section" id="projects">
                    <h2 class="section__title">Projects</h2>
                    <span class="section__subtitle">Most recent Work</span>
                    <div class="container section__border">
                        <div class="projects__container swiper">
                            <div class="swiper-wrapper project-list">
                              
                                <div class="projects__content swiper-slide" data-aos = "fade-right">
                                    <img src="https://res.cloudinary.com/dq9rrrsgx/image/upload/v1708465774/afrikimmo_udpocy.png" alt="projects" class="projects__img"/>
                                    <div class="info">
                                        <span class="projects__subtitle">Ecommerce</span>
                                        <h1 class="projects__title">UniKEthik</h1>
                                        <a href="https://tinatestv1.web.app" class="projects__button">
                                            View more<i class="ri-arrow-right-line"></i>  
                                        </a>
                                    </div>
                                </div>
                                  
                                <div class="projects__content swiper-slide" >
                                    <img src="https://res.cloudinary.com/dq9rrrsgx/image/upload/v1708465792/clean2o_ad1rqi.png" alt="projects" class="projects__img"/>
                                    <div class="info">
                                        <span class="projects__subtitle">Ordered</span>
                                        <h1 class="projects__title">cleans2o</h1>
                                        <a href="https://www.cleans2o.com/" class="projects__button">
                                            View more<i class="ri-arrow-right-line"></i>  
                                        </a>
                                    </div>
                                </div>

                                <div class="projects__content swiper-slide" data-aos = "fade-left">
                                    <img src="https://res.cloudinary.com/dq9rrrsgx/image/upload/v1708588516/homegenesis_ed4due.png" alt="projects " class="projects__img"/>
                                    <div class="info">
                                        <span class="projects__subtitle">Booking</span>
                                        <h1 class="projects__title">GENESIS</h1>
                                        <a href="https://genesisoutpatientllc.com/" class="projects__button">
                                            View more<i class="ri-arrow-right-line"></i>  
                                        </a>
                                    </div>
                                </div>
                                
                                
                            </div>
                               
                            <div class="swiper-button-next">
                                <i class="ri-arrow-right-s-line"></i>
                            </div>
                            <div class="swiper-button-prev">
                                <i class="ri-arrow-left-s-line"></i>
                            </div>
                           
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </section>
               
                <section class="testimonial section">
                    <h2 class="section__title">Testimonial</h2>
                    <span class="section__subtitle">My client saying</span>
                    <div class="container section__border">
                        <div class="testimonial__container swiper">
                            <div class="swiper-wrapper">
                               
                                <div class="testimonial__cantent swiper-slide" data-aos = "fade-right">
                                    <p class="testimonial__description">
                                        Working with Bienvenu is to give a good impression, 
                                        icarry out my project at a good Cost with excelentquality and attention.
                                        great service and recommended.
                                    </p>
                                    <div>
                                        <h3 class="testimonial__name">UniKEthik</h3>
                                        <span class="testimonial__subtitle">Client</span>
                                    </div>
                                </div>
                                
                                <div class="testimonial__cantent swiper-slide">
                                    <p class="testimonial__description">
                                        Working with Bienvenu is to give a good impression, 
                                        icarry out my project at a good Cost with excelentquality and attention.
                                        great service and recommended.
                                    </p>
                                    <div>
                                        <h3 class="testimonial__name">cleans2o</h3>
                                        <span class="testimonial__subtitle">Client</span>
                                    </div>
                                </div>
                               
                                <div class="testimonial__cantent swiper-slide" data-aos = "fade-left">
                                    <p class="testimonial__description">
                                        Working with Bienvenu is to give a good impression, 
                                        icarry out my project at a good Cost with excelentquality and attention.
                                        great service and recommended.
                                    </p>
                                    <div>
                                        <h3 class="testimonial__name">GENESIS</h3>
                                        <span class="testimonial__subtitle">Client</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="swiper-button-next">
                                <i class="ri-arrow-right-s-line"></i>
                            </div>
                            <div class="swiper-button-prev">
                                <i class="ri-arrow-left-s-line"></i>
                            </div>
                        </div>
                    </div>
                    
                </section>
               
                <Contact />
            </main>
          
          <footer class="footer">
            <div class="footer__container container" data-aos = "fade-down">
                <h1 class="footer__title">Bienvenu</h1>
                <p>Frontend Developer</p>

                <ul class="footer__list">
                    <li>
                        <a href="#home" class="footer__link">Home</a>
                    </li>
                    <li>
                        <a href="#skills" class="footer__link">Skills</a>
                    </li>
                    <li>
                        <a href="#project" class="footer__link">Project</a>
                    </li>
                </ul>
                <ul class="footer__social">
                    <a href="www.linkedin.com/in/bienvenu-masengesho" target="blank" class="footer__social-link linkedin">
                    <FaLinkedin />
                    </a>
                    <a href="https://github.com/masengesh" target="blank" class="footer__social-link github">
                    <FaGithub />
                    </a>
                    <a href="https://www.instagram.com/bienvenumasengesho/" target="blank" class="footer__social-link instagram">
                    <FaInstagram />
                    </a>
                </ul>
                <span class="linkedin">
                    <i>@bientobienvenu7436; Copyright Bienvenu Masengesho. All rights reserved</i>
                </span>
            </div>
          </footer>

          <a href="#" class="scollup" id="scroll-up">
            <i class="ri-arrow-up-line"></i>
          </a>
    </div>
  );
}


export default App;
