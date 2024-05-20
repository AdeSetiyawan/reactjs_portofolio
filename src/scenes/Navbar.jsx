import React from 'react'
import {Link} from 'react-router-dom'
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';


import {GlobeIcon,FileBadgeIcon,MortarBoardIcon,IdBadgeIcon,HomeIcon} from '@primer/octicons-react'



export default function Navbar() {
  return (
    


    <div className='container-fluid shadow-sm navbar-web sticky'>

        <div className='menu p-4 text-center d-flex gap-2 justify-content-center letter-spacing font-c'>
            <AwesomeButton type="github" className='letter-spacing font-p text-light3'><HomeIcon size={14} className='me-2' />  BERANDA</AwesomeButton>
            <a href="#tentangsaya">
              <AwesomeButton type="github" className='letter-spacing font-p text-light3'><IdBadgeIcon size={14} className='me-2' />TENTANG SAYA</AwesomeButton>
            </a>
            <a href="#riwayat">
              <AwesomeButton type="github" className='letter-spacing font-p text-light3'><MortarBoardIcon size={14} className='me-2' /> RIWAYAT</AwesomeButton>
            </a>
            <AwesomeButton type="github" className='letter-spacing font-p text-light3'><FileBadgeIcon size={14} className='me-2' />PROYEK SAYA</AwesomeButton>
            <Link to="https://note-ade.blogspot.com">
            <AwesomeButton type="github" className='letter-spacing font-p text-light3'><GlobeIcon size={14} className='me-2' /> BLOG</AwesomeButton>
            </Link>
           
        </div>
    </div>
  )
}
