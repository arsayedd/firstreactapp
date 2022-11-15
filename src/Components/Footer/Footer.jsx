import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
  <div className='footer'>
  <footer className='footer text-center bg-grey py-5 text-white'>
     <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Location</h4>
                 <p className="lead mb-0">
                            2215 John Daniel Drive
                            <br/>
                            Clark, MO 65243 </p>
         </div>
        <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Around the Web</h4>
         <div className='d-flex justify-content-center align-items-center'>
         <a href="" className='center me-2'>
            <i className='fab fa-facebook-f fa-2x'></i>
             </a>
            <a href="" className='center me-2'>
            <i className='fab fa-twitter fa-2x'></i>
            </a>
            <a href="" className='center me-2'>
            <i className='fab fa-linkedin-in fa-2x'></i>
            </a>
            <a href="" className='center me-2'>
            <i className='fab fa-dribbble fa-2x'></i>
            </a>
                            
        </div>
        </div>
        <div className="col-lg-4">
        <h4 className="text-uppercase mb-4">About Freelancer</h4>
        <p className="lead mb-0">
                            Freelance is a free to use, MIT licensed Bootstrap theme created by Route
         </p>
        </div>
        </div>
        </div>
    
    </footer>
     <div className="copyright py-4 text-center text-white">
            <div className="container">
              <small>Copyright © Your Website 2021</small>
              </div>
        </div>
     
    </div>

  )
}
