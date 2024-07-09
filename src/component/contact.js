import React, { useEffect } from 'react'
import { FaArrowUp } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Aos from 'aos';

function Contact() {

  useEffect (() => {
    Aos.init({duration: 3000 });
  }, [])
    const sendEmail = (e) => {
      e.preventDefault();
      const contactName = e.target.querySelector('#contact-name');
      const contactEmail = e.target.querySelector('#contact-email');
      const contactProject = e.target.querySelector('#contact-project');
      const contactMessage = e.target.querySelector('#contact-message');
  
      if (
        contactName.value === '' ||
        contactEmail.value === '' ||
        contactProject.value === ''
      ) {
        contactMessage.classList.remove('color-blue');
        contactMessage.classList.add('color-red');
        contactMessage.textContent = 'Please add your message in the project space.';
      } else {
        emailjs
          .sendForm(
            'service_zi60luj',
            'template_ht5vwev',
            '#contact-form',
            '-SoqxEbQtPjSLj6S8'
          )
          .then(() => {
            contactMessage.classList.add('color-blue');
            contactMessage.textContent = 'Message sent to Bienvenu 👍';
            setTimeout(() => {
              contactMessage.textContent = '';
            }, 5000);
          })
          .catch((error) => {
            alert('Sorry! Something has failed....', error);
          });
  
        contactName.value = '';
        contactEmail.value = '';
        contactProject.value = '';
      }
    };
  

  return (
    <div>
      <h2 className="section__title" data-aos = "fade-right">Contact Me</h2>
      <span className="section__subtitle" data-aos = "fade-left">Get in Touch</span>
      <div className="contact__container container grid amazing">
        <div className="contact__content">
          <h3 className="contact__title">
              <i className="ri-chat-3-line"></i>Talk to me
          </h3>
          <div className="contact__info" data-aos = "fade-right">
              <a href='' className="contact__data">
                  <span className="contact__data-title email"><img src='https://res.cloudinary.com/dq9rrrsgx/image/upload/v1708590732/112-gmail_email_mail-512_kskwco.webp' alt='gmail'/></span>
                  {/*<span className="contact__data-info email">bientobienvenu@gmail.com</span>*/}
                  
              </a>
              <a href='https://api.whatsapp.com/send?phone=256773515447&text=Hello, more information!' className="contact__data">
                  <span className="contact__data-title whatsap"><img src='https://res.cloudinary.com/dq9rrrsgx/image/upload/v1708590735/WhatsApp_db6rxa.webp' alt='whatsap'/></span>
                  {/*<span className="contact__data-info whatsap">+256773515447</span>*/}
                  
              </a>
              <a href='https://www.facebook.com/profile.php?id=100087138017074' className="contact__data">
                  <span className="contact__data-title messenger"><img src='https://res.cloudinary.com/dq9rrrsgx/image/upload/v1708590733/Facebook_Messenger_logo_2018.svg_vgxovq.png' alt='messenger'/></span>
                  {/*<span className="contact__data-info messenger">Bienvenu Masengesho</span>*/}
                  
              </a>
              <a href='www.mongoDB.com/in/bienvenu-masengesho' className="contact__data">
                  <span className="contact__data-title email"><img src='https://res.cloudinary.com/dq9rrrsgx/image/upload/v1708590732/112-gmail_email_mail-512_kskwco.webp' alt='gmail'/></span>
                  {/*<span className="contact__data-info email">Binvenu Masengesho</span>*/}
                  
              </a>
              <a href='https://www.instagram.com/bienvenumasengesho/' className="contact__data">
                  <span className="contact__data-title email"><img src='https://res.cloudinary.com/dq9rrrsgx/image/upload/v1708590734/Instagram_logo_ajsbti.webp' alt='gmail'/></span>
                  {/*<span className="contact__data-info email">bientobienvenu@gmail.com</span>*/}
                  
              </a>
              <a href='www.linkedin.com/in/bienvenu-masengesho' className="contact__data">
                  <span className="contact__data-title email"><img src='https://res.cloudinary.com/dq9rrrsgx/image/upload/v1708590732/circle-linkedin-512_bn75fp.webp' alt='gmail'/></span>
                  {/*<span className="contact__data-info email">Binvenu Masengesho</span>*/}
                  
              </a>
              <a href='https://www.youtube.com/channel/UCriyLO0JrGQYwjR9Bb3ggNQ' className="contact__data">
                  <span className="contact__data-title email"><img src='https://res.cloudinary.com/dq9rrrsgx/image/upload/v1708597840/youtube_o0xzem.jpg' alt='youtube'/></span>
                  {/*<span className="contact__data-info email">mativation keys</span>*/}
                  
              </a>
          </div>
        </div>
        <div className="contact__content">
          <h3 className="contact__title">
              <i className="ri-send-plane-line"></i>Write me your project
          </h3>
          <form action="" className="contact__form" id="contact-form" data-aos = "fade-left">
              <div className="contact__form-div">
                  <label className="contact__form-tag">Names</label>
                  <input 
                      type="text" n
                      ame="user_name" 
                      required placeholder="Write your names" 
                      className="contact__form-input" id="contact-name"/>
              </div>
          
              <div className="contact__form-div">
                  <label className="contact__form-tag">Mail</label>
                  <input 
                      type="email" 
                      name="user_email" 
                      required placeholder="Write your email" 
                      className="contact__form-input" id="contact-email"/>
              </div>
          
              <div className="contact__form-div contact__form-area">
                  <label className="contact__form-tag">Project</label>
                  <textarea 
                      name="user_project" 
                      placeholder="Write your project" 
                      id="contact-project" 
                      className="contact__form-input"></textarea>
              </div>
              <p className="contact__message" id="contact-message"></p>
              <button type="submit" className="contact__button">
                  <a href='https://forms.gle/mQNpwXnzTy6cmzuR7' >Submit <FaArrowUp /></a>
              </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact