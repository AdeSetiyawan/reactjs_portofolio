import React from 'react'
import Twitter from '../assets/img/twitter.svg'
import Facebook from '../assets/img/facebook.svg'
import Ig from '../assets/img/instagram.svg'
import Github from '../assets/img/github.svg'
import {Link} from 'react-router-dom'
import {Fade} from 'react-awesome-reveal'



export default function Header() {
  return (
    <div className='container text-light p-2 letter-spacing font-12 d-flex gap-2'>
        <Fade delay={200}>
            <Link to="https://twitter.com/AdeSetiyawan"  className=' hover-icon'>
                <img src={Twitter} alt="Twitter Ade Setiyawan" width={30} />
            </Link>
        </Fade>
        <Fade delay={400}>
            <Link to="https://www.facebook.com/ades3">
                <img src={Facebook} alt="Facebook Ade Setiyawan" width={30}  />
            </Link>
        </Fade>
        <Fade delay={600}>
            <Link to="https://www.instagram.com/adesetiyawan18/">
                <img src={Ig} alt="Instagram Ade Setiyawan" width={30}  />
            </Link>
        </Fade>
        <Fade delay={800}>
            <Link to="https://github.com/adesetiyawan" className=' text-danger'>
                <img src={Github} alt="Github Ade Setiyawan" width={30}   />

            </Link>
        </Fade>
    </div>
  
  )
}
