import React, { useState } from 'react'
import "./Testimonials.css"
import aliceTImg from "../../assets/images/aliceT.jpeg"
import johnSImg from "../../assets/images/johnS.jpeg"
import sarahLImg from "../../assets/images/sarahL.png"

export default function Testimonials() {
    const [testimonials] = useState([
        { "name": "Alice T.", "img": aliceTImg, "des": "LocalFixersHub saved my day! Quick and efficient service." },
        { "name": "John S.", "img": johnSImg, "des": "Great experience with their team. Highly." },
        { "name": "Sarah L.", "img": sarahLImg, "des": "Professional service and excellent results. Will use again!" },
        { "name": "Alice T.", "img": aliceTImg, "des": "LocalFixersHub saved my day! Quick and efficient service." },
        { "name": "John S.", "img": johnSImg, "des": "Great experience with their team. Highly." },
        { "name": "Sarah L.", "img": sarahLImg, "des": "Professional service and excellent results. Will use again!" },
    ]
    )
    return (
        <>
            <section className="testimonials-section my-5">
                <h1 className="section-heading text-center">Testimonials</h1>
                <hr className='w-25 mx-auto mb-4' />
                <div className="container">
                    <div className="slider">
                        <div className="slide-track py-4">
                            {
                                testimonials.map((element) => {
                                    return <div className="card" style={{ "width": "18rem" }}>
                                        <img src={element.img} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{element.name}</h5>
                                            <p className="card-text">{element.des}</p>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
