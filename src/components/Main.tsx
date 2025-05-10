import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/* Optional: You can add a profile image */}
          {/* <img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/avatar_circle.jpeg" alt="Avatar" /> */}
        </div>
        <div className="content">
          {/* Name without typing effect */}
          <h1>Shashidhar Nadiger</h1>

          {/* Cards for other content */}
          <div className="info-cards">
            <div className="card">
              <h3>Department of Computer Science and Engineering</h3>
            </div>
            <div className="card">
              <h3>Course: Algorithmic Problem Solving</h3>
            </div>
            <div className="card">
              <h3>Course Instructor: Prof. Prakash Hegde</h3>
            </div>
            <div className="card">
              <h3>SRN: 01fe22bci057</h3>
            </div>
          </div>

          <div className="social-icons">
            <a href="https://github.com/shashidhar-N-18/" target="_blank" rel="noreferrer">
              <GitHubIcon className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/shashidhar18/" target="_blank" rel="noreferrer">
              <LinkedInIcon className="social-icon" />
            </a>
          </div>

          <div className="mobile-social-icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer">
              <GitHubIcon className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer">
              <LinkedInIcon className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
