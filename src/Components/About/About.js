import React from 'react';
import Navbar from '../Navbar/Navbar';
import './About.css'; 

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-page">
        <div className="about-content">
          <h1 className="about-heading">About Us</h1>
          <p className="about-description">
            At Coding Mantra, our mission is to empower individuals with the art of coding. Our journey embarked in the digital realm several years ago, as a passionate group of developers and educators recognized the transformative potential of coding literacy. Since our inception, we've remained steadfast in our dedication to providing an exceptional platform for learning and honing coding skills.
          </p>
          <div className="about-values">
            <h2>Our Core Values:</h2>
            <ul>
              <li>Empowerment through Education</li>
              <li>Innovation and Creativity</li>
              <li>Community and Collaboration</li>
              <li>Continuous Learning</li>
            </ul>
          </div>
          <div className="about-team">
            <h2>Meet the Team:</h2>
            <ul>
              <li>Afshan Khan - Founder &amp; CEO</li>
              <li>Azhar Khan - Lead Instructor</li>
              <li>Yasar Masud - UX Designer</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
