import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <>
     <section className="footer-section p-3">
        <div className="container">
            <div className="row gap-lg-0 gap-4">
                <div className="col-lg-4 col-12 text-center">
                    <p>Contact Us:</p>
                    <p className='email'>support@localfixershub.com</p>
                </div>
                <div className="col-lg-4 col-12 text-center">
                    <p>Follow Us:</p>
                    <div className="social">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter mx-3"></i>
                    <i className="fa-brands fa-instagram"></i>
                    </div>
                </div>
                <div className="col-lg-4 col-12 text-center privacy">
                    <a href="">Privacy Policy</a>
                    <a href="" className='mt-2'>Terms of service</a>
                </div>
            </div>
        </div>
     </section>
    </>
  )
}
