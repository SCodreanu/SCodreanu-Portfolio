import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">Chi Sono</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <img src="/src/assets/img/profile_picture.webp" alt="foto profilo di Stefan Codreanu" className='about-image' />
        </div>
      </div>

    </section >
  );
};

export default About;
