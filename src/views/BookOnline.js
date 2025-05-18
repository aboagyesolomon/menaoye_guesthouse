import React, { useState } from "react";
import { useLocation } from 'react-router-dom';

const BookOnline = () => {

    const location = useLocation();
  const { arrival, departure } = location.state || {};

  const [formData, setFormData] = useState({
        name: '',
        contact: '',
        rooms: '1',
        price: "350 Ghana Cedis",
        arrival: arrival || '',
        departure: departure || '',
        });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://your-backend-api.com/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Booking submitted successfully!');
        // Optionally redirect or clear form
      } else {
        alert('Something went wrong!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting booking.');
    }
  };

    return(<>
            <div class="back_re">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="title">
                      <h2>Confirm Online Booking</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
          <div class="contact">
         <div class="container" >
            <div class="row">
               <div class="col-md-6">
               <form id="request" className="main_form" onSubmit={handleSubmit}>
  <div className="row">
    <div className="col-md-12">
      <input
        className="contactus"
        placeholder="Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
    </div>

    <div className="col-md-12">
      <input
        className="contactus"
        placeholder="Phone Number"
        type="tel"
        name="contact"
        value={formData.contact}
        onChange={handleChange}
      />
    </div>

    <div className="col-md-12">
      <select
        className="contactus"
        name="rooms"
        value={formData.rooms}
        onChange={handleChange}
      >
        {[...Array(15)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
    </div>

    <div className="col-md-12">
      <input
        className="contactus"
        type="date"
        name="arrival"
        value={formData.arrival}
        onChange={handleChange}
        required
      />
    </div>

    <div className="col-md-12">
      <input
        className="contactus"
        type="date"
        name="departure"
        value={formData.departure}
        onChange={handleChange}
        required
      />
    </div>

    <div className="col-md-12">
      <input
        className="contactus"
        type="text"
        name="price"
        value={formData.price}
        readOnly
      />
    </div>

    <div className="col-md-12">
      <button className="send_btn" type="submit">Confirm</button>
    </div>
  </div>
</form>

               </div>
               <div class="col-md-6">
                  <div class="map_main">
                     <div class="map-responsive">
                        <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="600" height="400" frameborder="0" style={{border:"0", width: "100%", allowfullscreen:""}}></iframe>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </>);


};

export default BookOnline;