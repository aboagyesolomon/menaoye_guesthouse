import React, {useState} from "react";
import * as Swal from 'sweetalert2';



const Contact = () => {

   const [formItems, setFormItems] = useState({
      name: "",
      email: "",
      phone: "",
      message: ""
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormItems({
         ...formItems,
         [name]: value
      });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const response = fetch('https://mena-oye-backend.onrender.com/send-email', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(formItems)
         });

         if (response.ok) {
            await Swal.fire('Success', 'Booking submitted successfully!', 'success');
          } else {
            await Swal.fire('Error', 'Something went wrong. Please try again.', 'error');
          }
      } catch (error) {
         console.error('Error submitting form:', error);
      await Swal.fire('Error', 'Network error. Please try again.', 'error');
      };
      setFormItems({
         name: "",
         email: "",
         phone: "",
         message: ""
      });
   }

    return(<>
     <div class="back_re">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="title">
                      <h2>Contact Us</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
          <div class="contact">
         <div class="container" >
            <div class="row">
               <div class="col-md-6">
                  <form id="request" class="main_form" onSubmit={handleSubmit}>
                     <div class="row">
                        <div class="col-md-12 ">
                           <input class="contactus" placeholder="Name" type="text" name="name" value={formItems.name} onChange={handleChange} required/> 
                        </div>
                        <div class="col-md-12">
                           <input class="contactus" placeholder="Email" type="type" name="email" value={formItems.email} onChange={handleChange}/> 
                        </div>
                        <div class="col-md-12">
                           <input class="contactus" placeholder="Phone Number" type="number" name="phone" value={formItems.phone} onChange={handleChange} required/>                          
                        </div>
                        <div class="col-md-12">
                           <textarea class="textarea" placeholder="Message" type="text" name="message" value={formItems.message} onChange={handleChange} required>Message</textarea>
                        </div>
                        <div class="col-md-12">
                           <button class="send_btn" type="submit">Send</button>
                        </div>
                     </div>
                  </form>
               </div>
               <div class="col-md-6">
                  <div class="map_main">
                     <div class="map-responsive">
                     <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2882.641101184582!2d-0.5274145409350155!3d6.368948455899383!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf2ba816fe46b5%3A0x338a1a6341f71c44!2sMenaOye%20Guest%20House!5e0!3m2!1sen!2sgh!4v1748949740280!5m2!1sen!2sgh" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </>);


};

export default Contact;