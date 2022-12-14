import React from 'react'
import './experience.css'
import{BsPatchCheckFill} from'react-icons/bs'



const Experience = () => {
  return (
    <section id='experience' className='section1'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development </h3>
          <div className='experience__content'>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>REACT</h4>
                <small className='text-light'>Beginner</small>
              </div>              
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>BOOTSTRAP</h4>
                <small className='text-light'>Beginner</small>
              </div>              
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>TAILWIND</h4>
                <small className='text-light'>Beginner</small>
              </div>             
            </article>
          </div>
        </div>

       { /*End of FrontEnd Developement*/}
        <div className='experience__backend'>
          <h3>Blockchain Developement </h3>
          <div className='experience__content'>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>BLOCKCHAIN</h4>
                <small className='text-light'>Intermediate</small>
              </div>             
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>SOLIDITY</h4>
                <small className='text-light'>Beginner</small>
              </div>             
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>NODE JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>              
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CRANQ</h4>
                <small className='text-light'>Beginner</small>
              </div>             
            </article>
            {/*
            Future me kuch sikha to ye articles ko edit karke daalde
            <article className='experience__details'>
              <BsPatchCheckFill/>
              <h4><TbBrandBootstrap/>BOOTSTRAP</h4>
              <small className='text-light'>Beginner</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill/>
              <h4><SiTailwindcss/>TAILWIND</h4>
              <small className='text-light'>Beginner</small>
            </article>
            */}
          </div>
        </div>
        {/*End of blockchain Developement*/}
      </div>
    </section>
  )
}

export default Experience