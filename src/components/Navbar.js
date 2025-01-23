import React from 'react';


function Navbar(){
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
    <img src="/portfolio.jpg" alt="Bootstrap" width="30" height="24"/>
      <a class="navbar-brand" href="/">Ritik Yadav</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href='/about'>About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/projects">Projects</a>
          </li>
         
          <li class="nav-item">
            <a class="nav-link" href="/contact">Contact</a>
          </li>
          
          </ul>
         
       
     
      </div>
    </div>
  </nav>
  );
}
export default Navbar;
