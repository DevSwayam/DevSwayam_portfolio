import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'

const Services = () => {
  return (
    <section id='service' className='service'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='services'>
          <div className='service__head'>
            <h3>Web3 Developer</h3>
          </div>
          <ul className='service__list'>
            <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Ye muze ata hey</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Ye muze ata hey</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Ye muze ata hey</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Ye muze ata hey</p>
            </li>
           
          </ul>
        </article>
        {/* one list ended*/} 
        
        <article className='services'>
          <div className='service__head'>
            <h3>Frontend Developer</h3>
          </div>
          <ul className='service__list'>
            <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Ye muze ata hey</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Ye muze ata hey</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Ye muze ata hey</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Ye muze ata hey</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Ye muze ata hey</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Ye muze ata hey</p>
            </li>
          </ul>
        </article>

           {/* one list ended*/} 

        <article className='services'>
          <div className='service__head'>
            <h3>Web2 Developer</h3>
          </div>
          <ul className='service__list'>
            <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Ye muze ata hey</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Ye muze ata hey</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Ye muze ata hey</p>
            </li>
            
            <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Ye muze ata hey</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Ye muze ata hey</p>
            </li>
          </ul>
        </article>
           {/* one list ended*/} 
      </div>
    </section>
  )
    

    
}

export default Services