import React from 'react'
import "../styles/Terms.css"

const terms = () => {
  return (
    <div style={{ backgroundColor: "#121315", padding: "5%" }}>
      <div className="policyContainer">
        <div className="policyMainDiv">
          <h1>Terms and Conditions</h1>
          <hr/>
        </div>
        <div className="policyDiv">
            <p>
                Websoc is the best Mobile and Web App developing company in India. Websoc is the one-stop solution provider for all your web and mobile app development needs, ranging from a small-scale project to a big-scale project and also provides solutions for various business verticals such as e-commerce, Social media platforms, ...
            </p>   
                <br />
            <p>
                We are here to make your vision virtual and enhance your by Expanding your BUSINESS- A Great Website and Mobile application can expand your BUSINESS all over India. We are here for you to Create and Develop a great website with the best design to Enhance your BUSINESS.          
            </p>
        </div>
        <div className="policyDiv2">
          <div className="policyDiv2InnerDiv">
              <h4>Date of Established</h4>
              <p>Websoc Studio was established on 07 September 2014. WEBSOC STUDIO is classified as a Non-govt company</p>
          </div>
          <div className="policyDiv2List">
              <h4>Contact Us</h4>
              <p>
                    If you have any queries You can contact us:
              </p>
              <ul>
                  <li>&#10003; By email: <a href="mailto:enquiry@websoc.ai"><span>enquiry@websoc.ai</span></a></li>
                  <li>&#10003; By visiting our address: <span>2nd Floor, High Spirits, Capital Park Road, VIP Hills, Silicon Valley, Madhapur, Hyderabad, Telangana 500081</span></li>
                  <li>&#10003; By phone number: <span>+91 9010006171, +91 9010006172</span></li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default terms
