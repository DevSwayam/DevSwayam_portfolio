import React from 'react'
import './about.css'
import change1 from '../../assets/me-about.jpg'
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
          <img src={change1} alt="ye change karna hey"/>
        </div>
      </div>
      <div className='about__content'> 
      <div className='about__cards'>

        <article className='about__card'>
          <FaAward className='about__icon'></FaAward>
          <h4>Experience in web3 Domain</h4>
          <small> 1 Year</small>
        </article>

        <article className='about__card'>
          <MdSchool className='about__icon'></MdSchool>
          <h4>B.E Computer Engineeting</h4>
          <small>Honors(Blockchain and Technology)</small>
        </article>

        <article className='about__card'>
          <AiOutlineFundProjectionScreen className='about__icon'></AiOutlineFundProjectionScreen>
          <h4>No of Projects in web2/web3</h4>
          <small>10+</small>
        </article>

      </div>
      <p>
        Idhar khudke bareme kuch to acha likh jisse logoko lage ki tuze web3 developement ata hey aur unhe pata mahi chale ki tune ye copy paste karke banaya hey. 
      </p>
      <a className='btn btn-primary ' href='#contact'> Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default about