import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot ,faPhone} from '@fortawesome/free-solid-svg-icons';
function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://formspree.io/f/xvggnajy',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Failed to send the message. Please try again later.');
    }
  };

  return (
  

<section class="mb-4">

 
<h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>

<p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly.</p>

<div class="row">


    <div class="col-md-9 mb-md-0 mb-5">
        <form onSubmit={handleSubmit}>

          
            <div class="row">

             
                <div class="col-md-6">
                    <div class="md-form mb-0">
           <label for="name" class="">Name</label>
                        <input type="text" id="name" name="name" class="form-control" value={formData.name} onChange={handleChange} required/>
                       
                    </div>
                </div>
               
                <div class="col-md-6">
                    <div class="md-form mb-0">
           <label for="email" class="">Email</label>
                        <input type="text" id="email" name="email" class="form-control" value={formData.email} onChange={handleChange} required/>
                       
                    </div>
                </div>
            

            </div>
         
           
        
            <div class="row">

              
                <div class="col-md-12">

                    <div class="md-form">
           <label for="message">message</label>
                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" value={formData.message} onChange={handleChange}></textarea>
                       
                    </div>

                </div>
            </div>
            <div class="text-center text-md-left">
            <button type="submit" className="submit-btn">Send Message</button>
        </div>
          

        </form>

      
        <div class="status">
    
    </div>
    </div>
    

    <div class="col-md-3 text-center">
          <ul class="list-unstyled mb-0">
              <li>
                 <FontAwesomeIcon icon={faLocationDot}> </FontAwesomeIcon><p>Mumbai,india</p>
              </li>

             <li><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon><p>+91 9321058356</p></li>

              <li><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon><p>yadavritik381@gmail.com</p>
                  
              </li>
          </ul>
      </div>
   

</div>

</section>
  );
}


export default Contact;