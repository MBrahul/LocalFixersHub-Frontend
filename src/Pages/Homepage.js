import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Explore from '../components/Explore/Explore'
import Services from '../components/Services/Services'
import Testimonials from '../components/Testimonials/Testimonials'
import KeyFeatures from '../components/KeyFeatures/KeyFeatures'
import Footer from "../components/Footer/Footer"


export default function Homepage(){
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
