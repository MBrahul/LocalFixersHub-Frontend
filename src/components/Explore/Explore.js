import React from 'react'
import './Explore.css'

export default function Explore() {
  return (
    <section className="explore-section py-5 text-center">
        <div className="container">
            <h2 className='text-center'>Your Local Fixer for Home Services</h2>
            <h4 className='text-center'>We offer reliable and efficient solutions for all your home repair</h4>
            <p className='text-center'>Explore Services</p>
            <div className='container py-3 mw'>
                <form class="d-flex">
                    <input class="form-control me-2 shadow-none p-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-dark" type="submit">Search</button>
                </form>
            </div>
        </div>
    </section>
  )
}
