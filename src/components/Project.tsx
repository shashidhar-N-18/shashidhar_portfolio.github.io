import React from "react";
import githubLogo from '../assets/images/github.png'; // Placeholder GitHub logo
import stockImage from '../assets/images/github.png'; // Placeholder stock image
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div>
            {/* Google Ecosystem Section */}
            

            {/* Projects Section */}
            <div className="projects-container" id="projects">

                <div className="domain-container" id="google-ecosystem">
                <h1>Domain: Google’s Ecosystem</h1>
                <div className="domain-grid">
                    {/* Google Search Card */}
                    <div className="domain-card">
                        <h2>Google Search</h2>
                        <p>
                            Concept Used: A* Search Algorithm, Trie Data Structure
                            <br />
                            Google Search uses advanced algorithms like the A* search algorithm to return the most relevant search results efficiently. Tries are used for fast search suggestions.
                        </p>
                        <a href="https://developers.google.com/search" target="_blank" rel="noreferrer">
                            <button>Learn More</button>
                        </a>
                    </div>
                    
                    {/* YouTube Card */}
                    <div className="domain-card">
                        <h2>YouTube</h2>
                        <p>
                            Concept Used: Graph Algorithms, Collaborative Filtering
                            <br />
                            YouTube leverages graph algorithms to track user behavior and recommend videos. Collaborative filtering suggests videos based on similar user preferences.
                        </p>
                        <a href="https://support.google.com/youtube/answer/9409631?hl=en" target="_blank" rel="noreferrer">
                            <button>Learn More</button>
                        </a>
                    </div>
                    
                    {/* Gmail Card */}
                    <div className="domain-card">
                        <h2>Gmail</h2>
                        <p>
                            Concept Used: Queueing Algorithms, Hashing
                            <br />
                            Gmail uses queueing algorithms to process incoming emails and employs hashing to index and quickly retrieve emails.
                        </p>
                        <a href="https://developers.google.com/gmail" target="_blank" rel="noreferrer">
                            <button>Learn More</button>
                        </a>
                    </div>

                    {/* Google Maps Card */}
                    <div className="domain-card">
                        <h2>Google Maps</h2>
                        <p>
                            Concept Used: Dijkstra’s Algorithm, Graph Theory
                            <br />
                            Google Maps uses Dijkstra’s algorithm for calculating the shortest path between locations using graph-based road data.
                        </p>
                        <a href="https://www.google.com/maps/about/" target="_blank" rel="noreferrer">
                            <button>Learn More</button>
                        </a>
                    </div>

                    {/* Google Cloud Card */}
                    <div className="domain-card">
                        <h2>Google Cloud</h2>
                        <p>
                            Concept Used: Distributed Hash Tables, Consistent Hashing
                            <br />
                            Google Cloud uses distributed hash tables and consistent hashing to manage massive data efficiently across servers.
                        </p>
                        <a href="https://cloud.google.com/storage" target="_blank" rel="noreferrer">
                            <button>Learn More</button>
                        </a>
                    </div>

                    {/* Google Assistant Card */}
                    <div className="domain-card">
                        <h2>Google Assistant</h2>
                        <p>
                            Concept Used: Natural Language Processing (NLP), Speech Recognition
                            <br />
                            Google Assistant employs NLP and speech recognition to interpret and respond to user commands in real-time.
                        </p>
                        <a href="https://assistant.google.com/" target="_blank" rel="noreferrer">
                            <button>Learn More</button>
                        </a>
                    </div>

                    {/* Nest Card */}
                    <div className="domain-card">
                        <h2>Nest (Smart Home Devices)</h2>
                        <p>
                            Concept Used: IoT Protocols, Queueing Algorithms
                            <br />
                            Nest devices use IoT protocols for device communication and employ queueing algorithms for managing multiple simultaneous device requests.
                        </p>
                        <a href="https://store.google.com/" target="_blank" rel="noreferrer">
                            <button>Learn More</button>
                        </a>
                    </div>

                    {/* Android Card */}
                    <div className="domain-card">
                        <h2>Android</h2>
                        <p>
                            Concept Used: Binary Search Trees (BST), Heap Data Structure
                            <br />
                            Android uses binary search trees for data indexing and heaps for efficient memory and process management.
                        </p>
                        <a href="https://developer.android.com/" target="_blank" rel="noreferrer">
                            <button>Learn More</button>
                        </a>
                    </div>

                    {/* Google Photos Card */}
                    <div className="domain-card">
                        <h2>Google Photos</h2>
                        <p>
                            Concept Used: Image Compression, Data Indexing
                            <br />
                            Google Photos uses image compression to save storage and indexing algorithms to quickly retrieve photos based on metadata.
                        </p>
                        <a href="https://photos.google.com/" target="_blank" rel="noreferrer">
                            <button>Learn More</button>
                        </a>
                    </div>
                </div>
            </div>
                <h1>Personal Projects</h1>
                <div className="projects-grid">
                    <div className="project">
                        <a href="https://github.com/shashidhar-N-18/CostCribAnalyzer" target="_blank" rel="noreferrer">
                            <img src={githubLogo} className="zoom" alt="thumbnail" width="100%" />
                        </a>
                        <a href="https://github.com/shashidhar-N-18/CostCribAnalyzer" target="_blank" rel="noreferrer">
                            <h2>CostCribAnalyzer</h2>
                        </a>
                        <p>Analyzed financial costs, optimized expenditure, and visualized data for better budget management.</p>
                    </div>
                    <div className="project">
                        <a href="https://github.com/shashidhar-N-18/StockSage" target="_blank" rel="noreferrer">
                            <img src={githubLogo} className="zoom" alt="thumbnail" width="100%" />
                        </a>
                        <a href="https://github.com/shashidhar-N-18/StockSage" target="_blank" rel="noreferrer">
                            <h2>StockSage</h2>
                        </a>
                        <p>A stock market analyzer tool providing insights and predictions for optimal investment decisions using AI and ML models.</p>
                    </div>
                    <div className="project">
                        <a href="https://github.com/shashidhar-N-18/Empowering-Women" target="_blank" rel="noreferrer">
                            <img src={githubLogo} className="zoom" alt="thumbnail" width="100%" />
                        </a>
                        <a href="https://github.com/shashidhar-N-18/Empowering-Women" target="_blank" rel="noreferrer">
                            <h2>Empowering Women</h2>
                        </a>
                        <p>A platform dedicated to empowering women with resources, articles, and educational tools aimed at enhancing social equality.</p>
                    </div>
                    <div className="project">
                        <a href="#" target="_blank" rel="noreferrer">
                            <img src={stockImage} className="zoom" alt="thumbnail" width="100%" />
                        </a>
                        <a href="#" target="_blank" rel="noreferrer">
                            <h2>Breaking Cart</h2>
                        </a>
                        <p>Coming soon: A full-stack e-commerce website more than just a full-stack e-commerce website featuring Heisenberg.</p>
                    </div>
                    <div className="project">
                        <a href="https://github.com/shashidhar-N-18/GenOs" target="_blank" rel="noreferrer">
                            <img src={githubLogo} className="zoom" alt="thumbnail" width="100%" />
                        </a>
                        <a href="https://github.com/shashidhar-N-18/GenOs" target="_blank" rel="noreferrer">
                            <h2>GenOs</h2>
                        </a>
                        <p>An AI assistant designed for fast and accurate OS queries, aiming to enhance user experience and improve productivity.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
