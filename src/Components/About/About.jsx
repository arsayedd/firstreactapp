import React from 'react'
import Heading from '../Heading/Heading'
import './About.css'
export default function About() {
 

  return (
    <>
    <section className='py-5 bg-green vh-100'>
                <div className="h-100 d-flex justify-content-center align-items-center">
                <div className=''>
                  <div>
                  <Heading title='About' bgColor='bg-white' textColor='text-white'/>
                  </div>
                  <div className="container">
                    <div className="row text-start" >
                      <div className="col-lg  ">
                        <div className="about-p ms-auto text-white">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                      </div>
                      <div className="col-lg  ">
                        <div className="about-p me-auto text-white">
                       <p> You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
            </section>

    </>
  )
}
