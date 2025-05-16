import React from "react";


const About = () => {

    return(<>
           <div className="back_re">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="title">
          <h2>About Us</h2>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="about">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-5">
        <div className="titlepage">
          <h3>About the CEO – Mr. Dominic Amoako</h3>
          <p className="margin_0">
            I’m Dominic Amoako, a retired U.S. Army veteran whose life has been shaped by discipline, leadership, and service. With experience in regions like Iraq, Afghanistan, and Syria, I’ve led operations in some of the most complex environments on earth.
            <br /><br />
            My roles in electronic systems and security have taught me to lead with calm, protect what matters, and ensure operational excellence under pressure. I hold certifications in Project Management (PMP), Security+, and Six Sigma Green Belt—each helping me continue that mission beyond the military.
            <br /><br />
            As CEO, I lead with integrity and service. My goal is always to create secure, peaceful spaces where people feel safe and valued.
          </p>
        </div>
      </div>

      {/* CEO Image */}
      <div className="col-md-7">
        <div className="about_img">
          <figure>
            <img src="assets/images/CEO.jpg" alt="Dominic Amoako - CEO" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Who We Are Section */}
<div className="about">
  <div className="container-fluid">
    <div className="row">
      {/* Image Section (now on the left) */}
      <div className="col-md-7">
        <div className="about_img">
          <figure>
            <img src="assets/images/madam-kortey.jpg" alt="Madam Ardey Gladys Kortey - In Loving Memory" />
          </figure>
        </div>
      </div>

      {/* Text Section (now on the right) */}
      <div className="col-md-5">
        <div className="titlepage">
          <h3>Who We Are – Mena Oye Guest House</h3>
          <p>
            Founded in November 2024 in loving memory of <strong>Madam Ardey Gladys Kortey</strong>, Mena Oye Guest House was created to reflect the warmth, care, and generosity she embodied.
            <br /><br />
            We offer more than accommodation—we offer a home away from home. Every guest is welcomed with authentic hospitality and treated with heartfelt attention.
            <br /><br />
            Our motto, <strong>“Your satisfaction and comfort is our goal,”</strong> guides everything we do. We value your feedback and are always working to improve.
            <br /><br />
            Whether you're visiting for business or relaxation, we’re here to make your stay peaceful, personal, and memorable.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>



    </>);


};

export default About;