import React from 'react'
import './Login.css'

export default function Login(props) {
  const { heading } = props;
  return (
    <>
      <section className="login-section py-5">
        <div className="container login-container shadow p-5">
          <h1 className="section-heading text-center text-capitalize">Login As {heading}</h1>
          <form className='mt-5' name='contact-form'>
            <div className="mb-3 w-100">
              <input type="text" name='email' className="form-control shadow-none contact-inputs" id="exampleInputEmail1" placeholder='Email' />
              {/* <span className="error-span">{errors.name}</span> */}
            </div>
            <div className="mb-3 w-100">
              <input type="text" name='password' className="form-control shadow-none contact-inputs" id="exampleInputEmail1" placeholder='Password' e />
              {/* <span className="error-span">{errors.email}</span> */}
            </div>
            <div class="form-check mb-3">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
                Show password
              </label>
            </div>
            <button className="btn btn-outline-dark " type="submit">Login</button>
          </form>
          <p className='mx-4 fw-light p-0 m-0'>or</p>
          <a href={"/signup/"+heading} className='text-dark'>Create New {heading} Account ?</a>
        </div>
      </section>
    </>
  )
}
