import React from 'react'
import{BsLinkedin} from'react-icons/bs'
import{BsGithub} from'react-icons/bs'
import{BsTwitter} from'react-icons/bs'
import{SiLeetcode} from'react-icons/si'
import{BsInstagram} from'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/swayam-karle-1a1b9822b' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/DevSwayam' target="_blank"><BsGithub/></a>
        <a href='https://twitter.com/DevSwayam?t=s_itqAtG4btuAyGQj7O6VA&s=09' target="_blank"><BsTwitter/></a>
        <a href='https://leetcode.com/DevSwayam/' target="_blank"><SiLeetcode/></a>
        <a href='https://instagram.com/swayam_karle?igshid=ZmVmZTY5ZGE=' target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials