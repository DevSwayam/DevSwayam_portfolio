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
            <p>Integrating Smart Contracts with Dapps using JS libraries</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Efficient in using Frameworks like Hardhat and Foundary</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Making Smart contracts Gas Efficient</p>
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
            <p>JavaScript</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>React Hooks</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>React Router</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Redux</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Tailwind</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Bootstrap</p>
            </li>
          </ul>
        </article>

           {/* one list ended*/} 

        <article className='services'>
          <div className='service__head'>
            <h3>Backend Web2+web3</h3>
          </div>
          <ul className='service__list'>
            <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Developing and Deploying Smart Contracts</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Mongo DB</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Developing Rest API's</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Node JS</p>
            </li>
            
            <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Express JS</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Experience with various BLockchain Tools LIke Chainlink, IPFS, THeGraph.</p>
            </li>
          </ul>
        </article>
           {/* one list ended*/} 
      </div>
    </section>
  )
    

    
}

export default Services