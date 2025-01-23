import React from 'react';


function Footer() {
  return (
  <div class="card">
 
    <div class="card-body">
    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='/'>
          Ritik Yadav
        </a>
      </div>
    </div>
  </div>
   
  );
}


export default Footer;
