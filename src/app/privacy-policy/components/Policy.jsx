import React from 'react'
import "../styles/Policy.css"

const Policy = () => {
  return (
    <div style={{ backgroundColor: "#121315", padding: "5%" }}>
      <div className="policyContainer">
        <div className="policyMainDiv">
          <h1>Privacy Policy</h1>
          <hr/>
        </div>
        <div className="policyDiv">
          <p>
              This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects you.</p>     
              <br />
          <p>
              We use Your Personal data to provide and improve the Service. By using the Service, you agree to collect and use information in accordance with this Privacy Policy.
          </p>
        </div>
        <div className="policyDiv2">
          <h2>Interpretation and Definitions</h2>
          <div className="policyDiv2InnerDiv">
              <h4>Interpretation</h4>
              <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
          </div>
          <div className="policyDiv2List">
              <h4>Definitions</h4>
              <p>
                  For the purposes of this Privacy Policy:        
              </p>
              <ul>
                  <li>&#10003; <span>Account:</span> means a unique account created for You to access our Service or parts of our Service.</li>
                  <li>&#10003; <span>Company:</span> websoc studio is a Non-Government Company, Weboc Studio Pvt. Ltd. 2nd Floor, High Spirits, Capital Park Road, VIP Hills, Silicon Valley, Madhapur, Hyderabad, Telangana 500081</li>
                  <li>&#10003; <span>Personal Data:</span> is any information that relates to an identified or identifiable individual.</li>
                  <li>&#10003; <span>Services:</span> Mobile and Web Application Development Services.</li>
              </ul>
          </div>
        </div>
        <div className="policyDiv2">
          <h2>Collecting and Using Your Personal Data</h2>
          <div className="policyDiv2List">
              <h4>Types of Data Collected</h4>
              <p>Personal Data: While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include:              </p>
              <ul>
                  <li>&#10003; <span>Email Address</span></li>
                  <li>&#10003; <span>First and Last Name</span></li>
                  <li>&#10003; <span>Phone Number</span></li>
              </ul>
          </div>
        </div>
        <div className="policyDiv2">
          <div className="policyDiv2List">
              <h4>Contact us:</h4>
              <p>If you have any queries you can contact us:</p>
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

export default Policy
