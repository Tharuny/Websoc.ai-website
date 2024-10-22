import React from 'react'
import '../styles/FSDetails.css'

const FSDetails = () => {
return (
    <><div className="outerDetailDiv">
        <div className="detailDiv">
            <div className="textDetailDiv">
                <h1>FullStack + Devops Course Details</h1>
                <ul>
                    <li>&#8226; Master full stack with HTML, CSS, JavaScript, ReactJS, Node.js, MongoDB/PostgreSQL.</li>
                    <li>&#8226; Utilize Bootstrap, TailwindCSS, GSAP, NextJS for dynamic web apps.</li>
                    <li>&#8226; Acquire DevOps skills: Linux, Git, Jenkins, Docker, Kubernetes, Puppet, Ansible.</li>
                    <li>&#8226; Implement continuous monitoring: PM2, Prometheus, Grafana.</li>
                    <li>&#8226; Gain hands-on experience in shell scripting, version control, containerization, configuration management.</li>
                </ul>
                <div className="briefDetailDiv">
                    <ul>
                        <li>Real-Time Work</li>
                        <li>3-6 Months</li>
                        <li>Trainers from IITs & IIMs</li>
                    </ul>
                </div>
                <div className="detailBtnBrochure">
                    <button className="applyBtnDiv">
                        <a className="applyBtnDivAnchor" href="https://forms.gle/USy8WW8F5kB9f1Ve9" target="_blank" rel="noopener noreferrer">Apply Now</a>
                    </button>
                    <a className="downloadBrochure" href="https://cdn.jsdelivr.net/gh/WebSoc-AI-Studio-Pvt-Ltd/Training-Brochures@main/FSDbrochure.pdf" download="Full-Stack-with-Devops-Brochure.pdf" target="_blank">Download Brochure</a>
                </div>
            </div>
            <div className="imgDetailDiv">
                <img src="/images/FSDetails.png" alt="" />
            </div>
        </div>
    </div>
    <div className="outerDetailDiv">
        <div className="detailDiv">
            <div className="imgDetailDiv">
                <img src="/images/DMImg.png" alt="" />
            </div>
            <div className="textDetailDiv">
                <h1>Digital Marketing Course Details</h1>
                <ul>
                    <li>&#8226; Comprehensive digital marketing training covering research, SEO, SEM, social media, content, and ads.</li>
                    <li>&#8226; Hands-on experience with ad strategies, analytics, and AI automation.</li>
                    <li>&#8226; In-depth study of trends, platforms, and case studies.</li>
                    <li>&#8226; Project-based learning for real-world application.</li>
                    <li>&#8226; Prepare for professional roles in digital marketing.</li>
                </ul>
                <div className="briefDetailDiv">
                    <ul>
                        <li>Real-Time Work</li>
                        <li>3-6 Months</li>
                        <li>Trainers from IITs & IIMs</li>
                    </ul>
                </div>
                <div className="detailBtnBrochure">
                    <button className="applyBtnDiv">
                        <a className="applyBtnDivAnchor" href="https://forms.gle/fvSNfvVKvouZkzqT9" target="_blank" rel="noopener noreferrer">Apply Now</a>
                    </button>
                    <a className="downloadBrochure" href="https://cdn.jsdelivr.net/gh/WebSoc-AI-Studio-Pvt-Ltd/Training-Brochures@main/FSDbrochure.pdf" download="Full-Stack-with-Devops-Brochure.pdf" target="_blank">Download Brochure</a>
                </div> 
            </div>
        </div>
    </div></>
    
)
}

export default FSDetails
