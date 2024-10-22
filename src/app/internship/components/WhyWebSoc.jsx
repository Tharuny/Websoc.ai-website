import React from 'react'
import '../styles/WhyWebSoc.css'

const WhyWebSoc = () => {
  return (
    <div className="containerHolder">
      <div className="textContainer">
            <h1>Why WebSoc.AI ..?</h1>
            <p className='pTextContainer'>Your gateway to a thriving career in tech and marketing.</p>
      </div>
      <div className="gridContainer">
        <div className="gridDiv">
            <div className="gridImg">
                <img src="/images/career.gif" alt="" />
            </div>
            <div className="gridText">
                <h3>Career Path</h3>
                <p>Explore diverse career opportunities in tech and marketing after completing the program.</p>
            </div>
        </div>
        <div className="gridDiv">
            <div className="gridImg">
                <img src="/images/development.gif" alt="" />
            </div>
            <div className="gridText">
                <h3>Portfolio Development</h3>
                <p>Learn how the program supports the creation of an impressive professional portfolio.</p>
            </div>
        </div>
        <div className="gridDiv">
            <div className="gridImg">
                <img src="/images/guide.gif" alt="" />
            </div>
            <div className="gridText">
                <h3>Guidance</h3>
                <p>Access personalized advice and industry insights from experienced mentors.</p>
            </div>
        </div>
        <div className="gridDiv">
            <div className="gridImg">
                <img src="/images/curriculum.gif" alt="" />
            </div>
            <div className="gridText">
                <h3>Curriculum Highlights</h3>
                <p>Get an overview of the comprehensive curriculum, including specific technologies and methodologies.</p>
            </div>
        </div>
        <div className="gridDiv">
            <div className="gridImg">
                <img src="/images/cert.gif" alt="" />
            </div>
            <div className="gridText">
                <h3>Certification</h3>
                <p>Obtain a valuable certification upon program completion, recognized within the industry.</p>
            </div>
        </div>
        <div className="gridDiv">
            <div className="gridImg">
                <img src="/images/job.gif" alt="" />
            </div>
            <div className="gridText">
                <h3>Job Portal Access</h3>
                <p>Benefit from access to a specialized job portal for program graduates, facilitating connections with potential employers.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WhyWebSoc
