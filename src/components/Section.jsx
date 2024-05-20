import React from 'react'
import {Fade} from 'react-awesome-reveal'
// import {
//    Link
// } from 'react-router-dom'

import Sosmed from '../scenes/Header'
import {FileCodeIcon,DevicesIcon} from '@primer/octicons-react'

export default function Section() {

  return (
    <div className="container">
        <div className="row mt-3">
            <div className="col-sm-4 col-md-4 col-lg-4 col-12 border-end border-light border-opacity-50" >
                <Fade>
                    <article>

                <div className='card p-3 border-0'>
                    <h2 className='font-subtitle text-light letter-spacing border-title mb-4' id="tentangsaya">Tentang Saya</h2>
                    <div className='font-p letter-spacing text-light2 lh-base mt-2 '>
                        <p align="justify" className='lh-base'>
                        Saya adalah seorang Guru disalah Satu SMK Negeri berkompetensi keahlian Pengembangan Perangkat Lunak dan Gim (PPLG) yang mempelajari tentang Pemrograman baik desktop maupun web. 
                        </p>
                        <p align="justify" className=' lh-base'>
                            Saya juga berprofesi sebagai freelance Web Developer Fullstack yang mengerjakan website app maupun website company profile dari client yang mempercayakan Website Aplikasi atau Company Profile mereka kepada saya.
                        </p>
                    </div>
                </div>
                    </article>
                </Fade>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 col-12 border-end border-light border-opacity-50" >
                <Fade delay={600}>
                    <article>
                    <div className='card p-3 border-0'>
              
                        <h2 className='font-subtitle text-light letter-spacing border-title mb-4'>Informasi Diri</h2>
                     
                        <div className='font-p fw-lighter letter-spacing text-light2 fw-lighter mt-2 '>
                            <div className="row mb-1">
                                <div className="col-3">Email</div>
                                <div className="col-9">:adesetiyawan@adesetiyawan.click</div>
                            </div>
                            <div className="row mb-1">
                                <div className="col-3">Phone</div>
                                <div className="col-9">:  (+62) 85647567963</div>
                            </div>
                            <div className="row mb-1">
                                <div className="col-3">Alamat</div>
                                <div className="col-9"><address>: Wonogiri, Jawa Tengah</address> </div>
                            </div>
                        </div>
                        <div className='container text-light p-2 letter-spacing font-12 d-flex gap-2 mt-4 pt-4 text-center mx-auto'>
                        
                                <Sosmed></Sosmed>
                       
                        </div>
         
                    </div>
                    </article>
                </Fade>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 col-12 border-end border-light border-opacity-50" >
                <Fade delay={800}>
                    <article>
                <div className='card p-3 border-0 '>
                    <h2 className='font-subtitle text-light letter-spacing border-title mb-4'>Keahlian Saya</h2>
                    <div className='font-p letter-spacing text-light2 lh-base mt-2 '>
                        <div className="row letter-spacing">
                            <div className="col-3 text-center">
                            <DevicesIcon size={60} />
                            </div>
                            <div className="col-9">
                                <div className="row">
                                    <div className="col-12 font-subtitle2 mb-2">FRONT END</div>
                                    <div className="col-12 text-light2">
                                        ReactJs, CSS, Bootstrap, JQuery, Javascript
                                    </div>
                                    <hr className='mt-3' />
                                </div>
                            </div>
                        </div>

     

                        <div className="row letter-spacing mt-3">
                            <div className="col-3">

                            <FileCodeIcon size={60} />
                            </div>
                            <div className="col-9">
                                <div className="row">
                                    <div className="col-12 font-subtitle2 mb-2">BACK END</div>
                                    <div className="col-12 text-light2">
                                        PHP, Laravel, Java
                                    </div>
                                    <hr className='mt-3' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </article>
                </Fade>
            </div>
        </div>
    </div>
  )
}

