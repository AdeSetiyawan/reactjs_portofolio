import React from 'react'
import { AwesomeButton } from 'react-awesome-button';
import {
  Link
} from 'react-router-dom'

export default function Title() {
  return (
    <div className='title'>
        <div className='text-light letter-spacing font-subtitle2'>
           Selamat datang, perkenalkan saya
        </div>
        <h1 className='text-info letter-spacing font-header'>
            ADE SETIYAWAN
        </h1>
        <div className='text-light letter-spacing font-p'>
            Seorang Guru Produktif Pemrograman Web dan FreelancerWeb Development (Fullstack Developer)
        </div>
        <div className='mt-3'>
        <Link to=""  onClick={(e) => window.location = 'mailto:ade.filekerja@gmail.com'}>
          <AwesomeButton type="secondary" className='letter-spacing font-p '>
           <span className='fw-bold'> 
             HUBUNGI SAYA
          </span>
         </AwesomeButton>
        </Link>
        </div>
        
    </div>
  )
}
