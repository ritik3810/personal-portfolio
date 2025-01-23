import React from 'react';

function Projects() {
  return (
    <div className="container my-5">
    <h1 className="text-center mb-5">My Projects</h1>
    <div className="row">
      {/* Project 1: Supply Chain Market */}
      <div className="col-md-4 mb-4">
        <div className="card shadow">
          <img
            src="supply-chain-image.jpg"
            className="card-img-top"
            alt="Supply Chain Market"
          />
          <div className="card-body">
            <h5 className="card-title">Supply Chain Market</h5>
            <p className="card-text">
              A decentralized supply chain marketplace built with Ethereum, Solidity, and IPFS.
              It uses smart contracts for automated transactions and Web3.js to enable seamless blockchain interaction with a React front-end.
            </p>
            <a href="supply-chain-link" className="btn btn-primary">
              View Project
            </a>
          </div>
        </div>
      </div>

      {/* Project 2: Botnet Detection */}
      <div className="col-md-4 mb-4">
        <div className="card shadow">
          <img
            src="botnet-detection-image.jpg"
            className="card-img-top"
            alt="Botnet Detection"
          />
          <div className="card-body">
            <h5 className="card-title">Botnet Detection</h5>
            <p className="card-text">
              A network traffic analysis and anomaly detection system built with Python and Scikit-learn to detect patterns indicative of botnet activity.
              Enhanced system accuracy by integrating IP reputation and behavioral analysis techniques.
            </p>
            <a href="botnet-detection-link" className="btn btn-primary">
              View Project
            </a>
          </div>
        </div>
      </div>

      {/* Project 3: SmartHome */}
      <div className="col-md-4 mb-4">
        <div className="card shadow">
          <img
            src="smarthome-image.jpg"
            className="card-img-top"
            alt="SmartHome"
          />
          <div className="card-body">
            <h5 className="card-title">SmartHome: Lighting Automation</h5>
            <p className="card-text">
              An IoT-based motion-activated lighting system designed with Arduino and C/C++.
              Uses Bluetooth for communication and is controlled by an Android app for user interaction.
            </p>
            <a href="smarthome-link" className="btn btn-primary">
              View Project
            </a>
          </div>
        </div>
      </div>

      {/* Project 4: Portfolio Website */}
      <div className="col-md-4 mb-4">
        <div className="card shadow">
          <img
            src="portfolio-image.jpg"
            className="card-img-top"
            alt="Portfolio Website"
          />
          <div className="card-body">
            <h5 className="card-title">Portfolio Website</h5>
            <p className="card-text">
              A professional portfolio website built with React, showcasing all my projects.
              Deployed on Heroku for easy access and real-time updates.
            </p>
            <a href="portfolio-link" className="btn btn-primary">
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Projects;