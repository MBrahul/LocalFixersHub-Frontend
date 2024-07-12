import React, { useState } from 'react'
// import validation from '../js/validation';
import img from '../../assets/images/img3-ezgif.com-crop.gif';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactUs.css'

export default function ContactPage() {

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    msg: ''
  });

  //ERROR IN VALIDATIONS
  const [errors, setErrors] = useState({
    is: true,
    name: '',
    email: '',
    phone: '',
    msg: ''
  });

//   const handleChange = (event) => {
//     const newObj = { ...values, [event.target.name]: event.target.value };
//     setValues(newObj);
//   }

//   //Connection to google sheet  
//   const sendData = async () => {
//     const scriptURL = "https://script.google.com/macros/s/AKfycbyg1PIV9OYBinK6aoGFMWFo3MiJnBSVPPge4W4LlmRIMzqlA-i1UPz5KfroEggIzzkW/exec";
//     const form = document.forms['contact-form'];
//     const response = await fetch(scriptURL, {
//       method: "POST",
//       body: new FormData(form),
//     });
//     const res = await response.json();
//     console.log(res);
//     //Showing pop-up notifications
//     if (res.result === "success") {
//       toast.success('Thanks for contacting us!', {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//         // transition: Bounce,
//       });
//     }
//     else {
//       toast.error('Something is Wrong!', {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//     }

//     setValues({
//       name: '',
//       email: '',
//       phone: '',
//       msg: ''
//     });
//   }


//   // Function to validation data and send it to google sheet if there is no error.
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const newObj = validation(values);
//     setErrors(newObj);
//     if (!newObj.is) {
//       // If there is no error - send data to google sheet
//       sendData(values);
//     }
//   }
  return (
    <>
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 form-section p-5 order-lg-0 order-1">
              <h2 className='font-main fw-bolder'>Get in touch</h2>
              <p className='fw-lighter'>How we can help you? please write down your query.</p>
              <form className='mt-5' name='contact-form'>
                <div className="mb-3 w-100">
                  <input type="text" name='name' className="form-control shadow-none contact-inputs" id="exampleInputEmail1" placeholder='Write your Name'/>
                  <span className="error-span">{errors.name}</span>
                </div>
                <div className="mb-3 w-100">
                  <input type="text" id="numericInput" name='phone' className="form-control shadow-none contact-inputs" placeholder='Write your Phone Number' e/>
                  <span className="error-span">{errors.phone}</span>
                </div>
                <div className="mb-3 w-100">
                  <input type="email" name='email' className="form-control shadow-none contact-inputs" id="exampleInputEmail1" placeholder='Write your Email'e />
                  <span className="error-span">{errors.email}</span>
                  <div id="emailHelp" className="form-text fw-lighter">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3 w-100">
                  <textarea className="form-control shadow-none contact-inputs" name='msg' id="exampleFormControlTextarea1" rows="5" placeholder='Write your Message'></textarea>
                  <span className="error-span"> {errors.msg}</span>
                </div>

                <button className="btn btn-outline-dark w-25" type="submit">Submit</button>
              </form>
            </div>
            <div className="col-12 col-lg-6 order-0 order-lg-1 d-flex justify-content-center align-items-center">
              <div className="container img-section">
                <img className='' src={img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  )
}