import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import headshot from '../assets/images/HEADSHOT.JPG';


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={headshot} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/MattStaff0" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/matthew-stafford-992170250/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Matthew Stafford</h1>
          <p>Dean’s Scholar B.S in Computer Science at Texas Christian University</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/MattStaff0" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/matthew-stafford-992170250/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;