import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white">
        <div className="container">
          <a className="navbar-brand" href="/">LocalFixersHub</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link active" href="#services">Services</a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link active" href="/">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/contact-us">Contact Us</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Login/Resigter
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/login/user">As User</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/login/worker">As Worker</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='mb-5'></div>
    </>
  )
}
