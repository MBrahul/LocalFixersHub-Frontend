import React, { useState } from 'react'
import './KeyFeatures.css'
import logo1 from '../../assets/images/businessman-close-up-with-a-recognition-medal.png'
import logo2 from '../../assets/images/time-and-date.png'
import logo3 from '../../assets/images/quality.png'
export default function KeyFeatures() {
    const [features] = useState([
        {"img":logo1, "title": "Professional Service Providers", "des": "Experienced and skilled professionals ready to assist you." },
        {"img":logo2, "title": "Flexible Scheduling", "des": "Book appointments at your convenience." },
        {"img":logo3, "title": "Quality Assurance", "des": "We guarantee top-notch service quality." },
    ])
    return (
        <section className="keyfeatures-section">
            <h1 className="section-heading text-center">Key Features</h1>
            <hr className='w-25 mx-auto' />
            <div className="d-flex">
                <div className="container d-flex flex-wrap gap-5 justify-content-center py-5">
                    {
                        features.map((feature) => {
                            return (
                                <div class="card" style={{ "width": "18rem" }}>
                                    <div class="card-body">
                                        <img className='logo my-3' src={feature.img} alt="" />
                                        <h5 class="card-title">{feature.title}</h5>
                                        <p class="card-text">{feature.des}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
