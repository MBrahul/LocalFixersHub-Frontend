import React, { useState } from 'react'
import './Services.css'
import plumber from '../../assets/images/plumbing.jpeg'
import mechanic from '../../assets/images/mechanic.jpeg'
import electrician from '../../assets/images/electrician.jpeg'
import carpenter from '../../assets/images/carpenter.webp'
import cleaner from '../../assets/images/cleaner.jpeg'


export default function Services() {
    const [services] = useState([
        { "heading": "Plumbers","img":plumber },
        { "heading": "Mechanics","img":mechanic },
        { "heading": "Electricians","img":electrician },
        { "heading": "Carpenters","img":carpenter },
        { "heading": "Cleaners" ,"img":cleaner},
    ])
    return (
        <section className="services-section py-5" id='services'>
            <h1 className="section-heading text-center">Services We Provide</h1>
            <hr className='w-25 mx-auto' />
            <div className="container d-flex flex-wrap gap-5 justify-content-center py-5">
                {
                    services.map((service) => {
                        return <div class="card" style={{ "width": "18rem" }}>
                            <img src={service.img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center">{service.heading}</h5>
                            </div>
                        </div>
                    })
                }
            </div>
        </section>
    )
}
