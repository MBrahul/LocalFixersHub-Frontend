import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Explore from './Explore/Explore'
import Services from './Services/Services'
import Testimonials from './Testimonials/Testimonials'
import KeyFeatures from './KeyFeatures/KeyFeatures'
import Footer from "./Footer/Footer"


export default function Homepage() {
    return (
       <>
       <Navbar/>
       <Hero/>
       <Explore/>
       <Services/>
       <KeyFeatures/>
       <Testimonials/>
       <Footer/>
       </>
    )
}
