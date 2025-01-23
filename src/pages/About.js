import React from 'react';

function About() {
    const downloadResume = () => {
        // Programmatically trigger the file download
        const link = document.createElement('a');
        link.href = '/resume.pdf'; // Replace with the actual file path
        link.download = 'Ritik_Yadav_Resume.pdf'; // Desired file name
        link.click();
      };
  return (
    <div className="about container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-4 border rounded shadow-md">
          <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
          <p>Name: Ritik Yadav</p>
          <p>Location: Kandivali, Mumbai</p>
          <p>Email: yadavritik381@gamil.com</p>
        </div>
        <div className="card p-4 border rounded shadow-md">
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          <p>Bachelor of Engineering in IT, Universal College of Engineering</p>
          <p>Diploma in IT, Pravin Patil College</p>
        </div>
        <div className="card p-4 border rounded shadow-md">
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc ml-6">
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Python</li>
            <li>Node.js</li>
            <li>MySQL</li>
          </ul>
          <button onClick={downloadResume} className='download-btn'>resume</button>
        </div>
      </div>
    </div>
      
     
  
  );
}

export default About;