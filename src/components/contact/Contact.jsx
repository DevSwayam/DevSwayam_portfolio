
import React, { useRef } from 'react';
import './contact.css'
import {MdEmail} from'react-icons/md'
import {BsWhatsapp} from'react-icons/bs'
import {AiOutlineInstagram} from'react-icons/ai'
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ww3y82f', 'template_or7wf2u', form.current, '3YOMSGk_k2X7hyEOU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact' className='cntct'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
          <MdEmail className='.contact__option-icon'/>
            <h4>Email</h4>
            <h5>swayamkarle2@gmail.com</h5>
            <a href='mailto:swayamkarle2@gmail.com' target='_blank'> Send a Message</a>
          </article>
          <article className='contact__option'>
          <AiOutlineInstagram className='.contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>swayam_karle</h5>
            <a href='https://instagram.com/swayam_karle?igshid=ZmVmZTY5ZGE=' target='_blank'> Send a Message</a>
          </article>
          <article className='contact__option'>
          <BsWhatsapp className='.contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>Swayam Karle</h5>
            <a href='https://wa.me/+919967490617>' target='_blank'> Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type='email' name = 'email' placeholder='Your Email' required></input>
          <textarea name='message' rows="7" placeholder='Your Message Try yo keep it short and sweet' />
          <button type='submut' className='btn btn-primary'> Send Message</button>
        </form>
      </div>
    </section>
  )
}
{/*https://wa.me/<number>*/}
export default Contact