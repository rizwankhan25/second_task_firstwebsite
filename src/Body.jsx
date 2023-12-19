import React from "react";
import "./Body.css";
import Cards from "./Cards";
import Footer from "./Footer";
const Body = () => {
  // const size = {};
  return (
    <div className="Body">
      <div className="part_1">
        <div id="left_1">
          <h1>
            Empowering Your <br />
            Business With Next- <br /> Level Digital Straitegis
          </h1>
          <p>
            We Provide A Comprehensive Suite of Digital Services Tailored To
            Your Unique Needs. Our Team Of Expert is Here To Connect Your Vision
            With Cutting-Edge
          </p>
          <button id="btn_1">Contact Us </button>
        </div>
        <div id="right_1">
          {/* <div className="big_circle">
            <div className="sm_circle">
              <img src="src/Assests/firstImage.png" alt="" />
            </div>
          </div> */}
          <img src="src/Assests/Group 3.png" alt="" />
        </div>
      </div>
      <div className="part_2">
        <div id="nav_patti">
          <div className="partti_img-1" id="s_logo">
            <img src="src/Assests/s_logo.png" alt="" />
          </div>
          <div className="partti_img-1">
            <img src="src/Assests/e logo 11.png" alt="" />
          </div>
          <div className="partti_img-1">
            <img src="src/Assests/js logo 11.png" alt="" />
          </div>
          <div className="partti_img-1">
            <img src="src/Assests/react logo 1.png" alt="" />
          </div>
          <div className="partti_img-1">
            <img src="src/Assests/ui ux logo 1.png" alt="" />
          </div>
          <div className="partti_img-1">
            <img src="src/Assests/xd logo 1.jpeg" alt="" />
          </div>
          <div className="partti_img-1">
            <img src="src/Assests/capsule logo 1.png" alt="" />
          </div>
        </div>
        <div id="page_2-text">
          <h1>Navigation The Digital Landscape To Empower Your Bussiness</h1>
          <p>
            We Provide A Comprehensive Suite Of Digital Services Tailored To
            Your Unique Needs. Our Team Of Expert is Here Connect Your Vision
            With Cutting Edge.
          </p>
        </div>
        <div id="cards">
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
      <div className="page_3">
        <div id="page_3-main">
          <div id="page_3-left">
            <h3>Who We Are</h3>
            <h1>We Are The Driving Force Behind Your Digital Success.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              ipsam amet rerum vitae inventore corporis tempora mollitia ducimus
              voluptatum nisi nesciunt neque consectetur unde laudantium
              doloremque, omnis eligendi quisquam laboriosam!
            </p>
            <div id="box_1">
              <div id="box_1-left">
                <h2>300+</h2>
                <h5>Work Completed</h5>
              </div>
              <div id="box_1-right">
                <h2>500+</h2>
                <h5>Happy Clients</h5>
              </div>
            </div>
          </div>
          <div id="page3_right-box">
            <h3>10+</h3>
            <h3>Years Experience</h3>
          </div>
          <div id="page_3-right"></div>
        </div>
      </div>
      <div className="page_4">
        <div id="page4_content">
          <h1>Let's Contact Us Now</h1>
          <h4>We can't wait to hear from you so happy.</h4>
        </div>
        <div id="part4_main">
          <div id="part_4-image"></div>
          <div id="part_4-input">
            <input type="text" name="" placeholder="Name" />
            <br />
            <input type="text" name="" placeholder="Email" />
            <br />
            <input type="text" name="" placeholder="Subject" />
            <br />
            <input type="text" name="" placeholder="Enter your message" />
            <br />
          </div>
        </div>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
};

export default Body;
