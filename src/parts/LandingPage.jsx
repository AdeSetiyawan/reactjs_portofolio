import React from 'react'
import Header from '../scenes/Header'
import Title from '../scenes/Title'
import Navbar from '../scenes/Navbar'
import Riwayat from '../scenes/Riwayat'
import Footer from '../components/Footer'
import Section from '../components/Section'
import {Fade} from 'react-awesome-reveal'
import {Bounce} from 'react-awesome-reveal'



export default function LandingPage() {
  return (

<>




        <Fade>
            <header>
            <div className='container-fluid banner'>
                <Header></Header>
                <Bounce delay={1000}>
                <Title></Title>
                </Bounce>
            </div>
            </header>
        </Fade>


            <nav className='sticky-top'>
        <Fade delay={1200}>
                <Navbar></Navbar>
        </Fade>
            </nav>



            <section>
                <Section></Section>
            </section>
            <Fade delay={500}>
            <section>
                <Riwayat></Riwayat>
            </section>
            </Fade>



        <Fade delay={1400}>
            <Footer></Footer>
        </Fade>
        
        </>

  )
}
