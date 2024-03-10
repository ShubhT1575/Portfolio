import React from 'react'

function About() {
  return (
    <>
    <div className="about-container">
        <p className='about-me'>About Me</p>
        <div className="intro">
            <strong>Me... at a PC</strong><br />
            It did not start like this, I wasn't always just glued to the computer. I used to play a lot of Games📱.
        </div>

        <div className="box">
            <div className="heading">From</div>
            <strong >Prayagraj, Uttar pradesh</strong><br/>
            <strong >{`-Curious mind, creative heart.;-)`}</strong>
        </div>
        <div className="box">
            <div className="heading">College</div>
            <strong >Bachelor's of Computer Application</strong><br/>
            <strong >{`-Mahatma Gandhi Kashi Vidyapith University.`}</strong>
        </div>
        <div className="box">
        <div className="heading">Coding</div>

        <div className="progress-div">
           <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar">95%</div>
             </div> 
             <strong >C++</strong>
        </div>
        <div className="progress-div">

             <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar bar2">100%</div>
             </div> 
             <strong >HTML</strong>
        </div>
        <div className="progress-div">

             <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar bar3">90%</div>
             </div> 
             <strong >CSS</strong>
        </div>
        <div className="progress-div">

             <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar bar4">80%</div>
             </div> 
             <strong >JAVASCRIPT</strong>
        </div>
        <div className="progress-div">

             <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar bar5">70%</div>
             </div> 
             <strong >REACT JS</strong>
        </div>
        </div>

        <div className="about-image"></div>

    </div>
    </>
  )
}

export default About
