import React from 'react'

function Contact() {
  return (
    <>
    <div className="portfolio-container Contact">
        <p className='portfolio'>Contact  Me</p>
        <div className="largeText">
        I've worked on many projects and believe I can help with yours.
        </div>
        <p className='smallText'>Anything from simple designs or scripts to full-stack development.</p>

        <a href="https://github.com/ShubhT1575" className='anchor' ><div className="github githubDiv">
        <i className="fa-brands fa-github icon1"></i>
        <strong>Github</strong>
        https://github.com/ShubhT1575
        </div>
        </a>

        <a href="https://twitter.com/tiwari_shubh15" alt="www.linkedin.com/in/shubham-tiwari-8a0187290" className='anchor' >
        <div className="github parent">
            <div className="child">
            <i className="fa-brands fa-linkedin"></i>
            <strong>LinkedIn</strong>
            www.linkedin.com/in/shubham-tiwari-8a0187290
            </div>
            <div className="child">
            <i className="fa-brands fa-x-twitter"></i>
            <strong>TwitterX</strong>
            <p className='link'>https://twitter.com/tiwari<br></br>_shubh15</p>
            </div>
        </div>
        </a>

        <div className="github phoneNo githubDiv">
        <i className="fa-solid fa-phone"></i>
        <strong>9696612900</strong>
        <i className="fa-solid fa-envelope email"></i>
        <strong className='email'>st9889294838@gmail.com</strong>
        </div>

        <div className="contact-img"></div>
    </div>
    </>
  )
}

export default Contact
