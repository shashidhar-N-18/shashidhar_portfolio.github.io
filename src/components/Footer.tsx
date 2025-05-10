import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/shashidhar-N-18/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/shashidhar18//" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>

        <p>© 2025 Shashidhar Nadiger. All rights reserved.</p>  

    </footer>
  );
}

export default Footer;