import React from 'react'
import './about.css'
import Developer from '../../assets/Developer.png'
import{FaAward} from'react-icons/fa'
import{MdSchool} from'react-icons/md'
import{AiOutlineFundProjectionScreen} from'react-icons/ai'

const about = () => {
  return (
    <section id='about' className='section2'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
    
    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={Developer} alt="ye change karna hey"/>
        </div>
      </div>
      <div className='about__content'> 
      <div className='about__cards'>

        <article className='about__card'>
          <FaAward className='about__icon'></FaAward>
          <h4>Experience in web3 Domain</h4>
          <small> 1+ Year</small>
        </article>

        <article className='about__card'>
          <MdSchool className='about__icon'></MdSchool>
          <h4>B.E Computer Engineering</h4>
          <small>Honors(Blockchain and Technology)</small>
        </article>

        <article className='about__card'>
          <AiOutlineFundProjectionScreen className='about__icon'></AiOutlineFundProjectionScreen>
          <h4>No of Projects in web2/web3</h4>
          <small>10+</small>
        </article>

      </div>
      <p>
      Experienced Web3 Developer with a background in developing MERN (MongoDB, Express, React, Node.js) applications. Proficient in blockchain technologies and smart contracts with a strong foundation in building decentralized applications. Excited about leveraging both Web2 and Web3 expertise to shape the future of the internet
      </p>
      <a className='btn btn-primary ' href='#contact'> Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default about