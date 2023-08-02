import React from "react";
import "./portfolio.css";
import img1 from '../../assets/JobSet.png'
import img2 from '../../assets/iNoteBook.png'
import img3 from '../../assets/newsMonkey.png'
import img4 from '../../assets/DevCanSwap.png'
import img5 from '../../assets/DDRIVE.png'
import img6 from '../../assets/nft_indexer.png'

const Portfolio = () => {
  return (
    <section id="portfolio" className="port">
      <h5> My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt="site_image"></img>
          </div>
          <h3>JobSet </h3>
          <h3> Technologies used : MERN</h3> 
          <h4>
            JobSet is an innovative job-providing platform that connects recruiters with job seekers, enabling recruiters to post job opportunities and applicants to apply seamlessly. Simplifying the job search process for both parties, it facilitates efficient recruitment and employment processes.</h4>
          <br></br>
          
          <div className="portfolio__item-cta">
            <a className="btn" href="https://jobset.onrender.com/" target='_blank'>LiveDemo</a>
            <a className="btn" href="https://github.com/DevSwayam/JobSet/tree/main" target='_blank'>Github</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img2} alt="site_image"></img>
          </div>
          <h3>iNotbook</h3>
          <h3> Technologies used : MERN</h3> 
          <h4>
          iNoteBook is a secure and user-friendly note-making app that empowers users to store and organize their private notes effortlessly. With robust encryption and intuitive features, it ensures privacy and convenience for all users.
          </h4>
          <br></br>
          <div className="portfolio__item-cta">
            <a className="btn" href="https://urnotebook.netlify.app/" target='_blank'>LiveDemo</a>
            <a className="btn" href="https://github.com/DevSwayam/INoteBook" target='_blank'>Github</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img3} alt="site_image"></img>
          </div>
          <h3>NewsMonkey</h3>
          <h3> Technologies used : React</h3> 
          <h4>NewsMonkey, a static news-providing website that keeps users informed with the latest headlines and stories.
          </h4>
          <br></br>
          <div className="portfolio__item-cta">
            <a className="btn" href="https://github.com/DevSwayam/Decentralised-Drive" target='_blank'>Github</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img4} alt="site_image"></img>
          </div>
          <h3>DevSwap</h3>
          <h3> Technologies used : Cranq, React, Node , Ethers.js</h3> 
          <h4>Introducting, DevSwap a DEX App built on top of UniSwap v2 codebase. Used for exhanging ERC-20 Tokens
          </h4>
          <br></br>
          <div className="portfolio__item-cta">
            <a className="btn" href="https://devcanswap.netlify.app/" target='_blank'>LiveDemo</a>
            <a className="btn" href="https://github.com/DevSwayam/DevSwap" target='_blank'>Github</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img5} alt="site_image"></img>
          </div>
          <h3>Decentralised Drive </h3>
          <h3> Technologies used : Solidity, React, Node , Ethers.js, IPFS, Pinata.</h3> 
          <h4>Decentralised drive a Decentralised version of Google Drive where you can store media files on IPFS.
          </h4>
          <br></br>
          <div className="portfolio__item-cta">
            <a className="btn" href="https://github.com/DevSwayam/DevSwap" target='_blank'>LiveDemo</a>
            <a className="btn" href="https://github.com/DevSwayam/DevSwap" target='_blank'>Github</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img6} alt="site_image"></img>
          </div>
          <h3>NFT Indexer App</h3>
          <h3> Technologies used : Alchmey, React, Node, Ethers.js.</h3> 
          <h4>NFT Indexer is a basic utility tool it lets anyone views how many NFT's a person holds using his public wallet address.
          </h4>
          <br></br>
          <div className="portfolio__item-cta">
            <a className="btn" href="https://nft-indexer-trial.netlify.app/" target='_blank'>LiveDemo</a>
            <a className="btn" href="https://github.com/DevSwayam/nft_indexer" target='_blank'>Github</a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
