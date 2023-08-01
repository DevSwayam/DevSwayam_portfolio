import React from 'react'
import CTA from './CTA'
import{HiOutlineArrowCircleRight} from'react-icons/hi'
import HeaderSocials from './HeaderSocials'
import "./header.css"
import ME from '../../assets/swayam_realBg.png'

const Header = () => {
  return (
    <header className='section3'>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Swayam</h1>
        <h3 className="text-light">Full Stack Web3 Developer</h3>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt='My Photo'/>
        </div>
        <a href='#contact' className='scroll__down'>  Scroll Down   <strong><HiOutlineArrowCircleRight/></strong></a>
      </div>
    </header>
  )
}

export default Header