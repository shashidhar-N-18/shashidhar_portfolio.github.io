import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
  
    "JavaScript",
    "Python",
    "React",
    "SQL",
    "PostgreSQL",
    "Node.js",
    "Express.js",
    "Postman"
];

const labelsSecond = [
    "C++",
    "Mininet",
    "Openstack",
    "Git",
    "GitHub Actions",
    "Docker",
    "Linux",
    "Pandas",
    "Selenium",
];

const labelsThird = [
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Keras",
    "OpenAI",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Tech Stack</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have developed a wide range of web applications from the ground up, utilizing cutting-edge technologies like React and Flask. With a solid understanding of the Software Development Life Cycle (SDLC), I excel in both frontend and backend development, ensuring seamless integration and efficient functionality.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faNetworkWired} size="3x"/>
                    <h3>Networking & Coding</h3>
                    <p>I focus on building robust network architectures and have experience in DSA (Data Structures and Algorithms) along with optimizing solutions for various network-related tasks such as DDoS simulation and traffic management. I work with tools like TShark, MiniNet, and hping3 to implement and test networking strategies for enhanced security and performance.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>


                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>ML & GenAI</h3>
                    <p>Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;