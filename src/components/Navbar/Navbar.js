import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">LocalFixersHub</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="/">Services</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="/">About Us</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="/">Contact</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="/">Sign Up/Resigter</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
