import React from 'react'
import style from '../styles/footer.module.css';
import Facebook from '../public/img/Facebook.svg';
import Linkedin from '../public/img/LinkedIn.svg';
import Instagram from '../public/img/Instagram.svg';
import Twitter from '../public/img/Twitter.svg';
import FooterEclipse from '../public/img/footer-eclipse.svg';
import Image from 'next/image';
const footer = () => {
  return (
    <div className={style.container}>
      <div className={style.innerTop}>
        <div className={style.firstCard}>
          <Image height={100} width={100} src={FooterEclipse}/>
          <p>Subscribe to our Newsletter</p>
          <div>
            <input type='email' placeholder='Enter your email'/>
            <button className='primary-btn'>Get Started</button>
          </div>
        </div>
        <div className={style.endCardBox}>
        <div className={style.endCard}>
          <p>Services</p>
          <p>Design</p>
          <p>Development</p>
          <p>Marketing</p>
          <p>Sales</p>
          <p>Customer Service</p>
        </div>
        <div className={style.endCard}>
        <p>Resources</p>
          <p>Privacy Policy</p>
          <p>Terms and Condition</p>
          <p>Blog</p>
          <p>Contact Us</p>
        </div>
        <div className={style.endCard}>
        <p>Company</p>
          <p>About Us</p>
          <p>Why Choose Us</p>
          <p>Pricing</p>
          <p>Testimonial</p>
        </div>
        </div>
      </div>
      <div className={style.innerBottom}>
        <p>Copyright @2023</p>
        <div className={style.socialMedia}>
          <Image height={20} width={20} src={Facebook}/>
          <Image height={20} width={20} src={Twitter}/>
          <Image height={20} width={20} src={Instagram}/>
          <Image height={20} width={20} src={Linkedin}/>
        </div>
      </div>
    </div>
  )
}

export default footer