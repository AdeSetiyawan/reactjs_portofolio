import React from 'react'
import {MortarBoardIcon,FileBadgeIcon,RocketIcon} from '@primer/octicons-react'

export default function Riwayat() {
  return (
    <div className='container margin-section'>
        <h2 className='font-subtitle letter-spacing text-light mb-4 subtitle' id="riwayat">
                Riwayat    
                

        </h2>
        <div className="container mt-2">
            <div className="row">
                <div className="col-sm-4 col-md-4 col-lg-4 col-12 text-light letter-spacing">
                    <div className='p-4 border-light3'>
                        <h3 className='font-subtitle2 text-light1 d-flex align-items-center gap-2'>
                            <FileBadgeIcon size={24} />
                            Sertifikat
                        </h3>
                        <hr />
                    </div>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4 col-12 text-light letter-spacing">
                    <div className='p-4 border-light3'>
                        <h3 className='font-subtitle2 text-light1 d-flex align-items-center gap-2 mb-3'>
                            <MortarBoardIcon size={24} />
                            Pendidikan
                        </h3>
                        <hr />
                        <p>
                            <div className='font-p fw-bold text-light2 mb-2 mt-4'>
                                <b>
                                #1 Sekolah Dasar (SD)
                                </b>
                            </div>
                            <div className='font-c text-light3 ps-4'>
                                <b>
                                Sekolah Dasar Negeri 1 Jatisrono 
                                </b>
                                <br></br>
                                Tahun : 1995 - 2001
                            </div>
                            <div className='font-p fw-bold text-light2 mb-2 mt-4'>
                                <b>
                                #2 Sekolah Menengan Pertama (SMP)
                                </b>
                            </div>
                            <div className='font-c text-light3 ps-4'>
                                <b>
                                SMP Negeri 2 Jatisrono 
                                </b>
                                <br></br>
                                Tahun : 2001 - 2004
                            </div>
                            <div className='font-p fw-bold text-light2 mb-2 mt-4'>
                                <b>
                                #3 Sekolah Menengan Atas (SMA)
                                </b>
                            </div>
                            <div className='font-c text-light3 ps-4'>
                                <b>
                                SMA Negeri 1 Jatisrono 
                                </b>
                                <br></br>
                                Tahun : 2004 - 2007
                            </div>
                            <div className='font-p fw-bold text-light2 mb-2 mt-4'>
                                <b>
                                #4 Perguruan Tinggi Swasta (PTS)
                                </b>
                            </div>
                            <div className='font-c text-light3 ps-4'>
                                <b>
                                Universitas Sahid Surakarta 
                                </b>
                                <br></br>
                                <span className=' fst-italic'>
                                Jurusan : Teknik Informatika
                                </span>
                                <br />
                                Tahun : 2007 - 2012
                            </div>

                        </p>
                    </div>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4 col-12 text-light letter-spacing">
                    <div className='p-4 border-light3 '>
                        <h3 className='font-subtitle2 text-light1 d-flex align-items-center gap-2'>
                            <RocketIcon size={24} />
                            Keahlian
                        </h3>
                        <hr />
                    </div>
                </div>
            </div>
            
        </div>

    </div>
  )
}
