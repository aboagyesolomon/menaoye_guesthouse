import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as Swal from 'sweetalert2';

const generateTimeOptions = () => {
  const times = [];
  const hours = [...Array(12).keys()].map(i => i + 1); // 1-12
  const minutes = ['00', '15', '30', '45'];
  const meridiems = ['AM', 'PM'];

  meridiems.forEach(meridiem => {
    hours.forEach(hour => {
      minutes.forEach(min => {
        times.push(`${hour}:${min} ${meridiem}`);
      });
    });
  });

  return times.map(time => (
    <option key={time} value={time}>{time}</option>
  ));
};

const BookOnline = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { arrival, departure } = location.state || {};

  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    rooms: '1',
    arrival: arrival || '',
    arrivalTime: '',
    departure: departure || '',
    price: "350 Ghana Cedis",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updatedData = {
        ...prev,
        [name]: value,
      };

      if (name === "rooms") {
        const total = 350 * parseInt(value);
        updatedData.price = `${total} Ghana Cedis`;
      }

      return updatedData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const total = 350 * parseInt(formData.rooms);
    const deposit = total * 0.3;

    const result = await Swal.fire({
      title: 'Confirm Booking',
      html: `
        <p>Total price: <strong>${total} GHS</strong></p>
        <p>Initial 30% deposit required: <strong>${deposit.toFixed(2)} GHS</strong></p>
        <p>Do you agree to proceed?</p>
      `,
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Yes, I agree',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
      customClass: {
        confirmButton: 'swal2-confirm btn btn-success',
        cancelButton: 'swal2-cancel btn btn-danger',
      },
    });

    if (!result.isConfirmed) {
      resetFormAndRedirect();
      return;
    }

    const requestBody = {
      ...formData,
      email: 'menaoye24@gmail.com',
      message: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 8px; max-width: 600px; margin: auto; background-color: #f9f9f9;">
          <h2 style="color: #2c3e50; text-align: center;">New Booking Confirmation</h2>
          <p style="font-size: 16px; color: #333;">Dear Admin,</p>
          <p style="font-size: 16px;">A new booking has been submitted with the following details:</p>
          <table style="width: 100%; font-size: 16px; border-collapse: collapse;">
            <tr><td style="padding: 8px;"><strong>Name:</strong></td><td style="padding: 8px;">${formData.name}</td></tr>
            <tr><td style="padding: 8px;"><strong>Contact:</strong></td><td style="padding: 8px;">${formData.contact}</td></tr>
            <tr><td style="padding: 8px;"><strong>Rooms:</strong></td><td style="padding: 8px;">${formData.rooms}</td></tr>
            <tr><td style="padding: 8px;"><strong>Arrival:</strong></td><td style="padding: 8px;">${formData.arrival}</td></tr>
            <tr><td style="padding: 8px;"><strong>Arrival:</strong></td><td style="padding: 8px;">${formData.arrivalTime}</td></tr>
            <tr><td style="padding: 8px;"><strong>Departure:</strong></td><td style="padding: 8px;">${formData.departure}</td></tr>
            <tr><td style="padding: 8px;"><strong>Price:</strong></td><td style="padding: 8px;">${formData.price}</td></tr>
          </table>
          <p style="font-size: 16px;">Kindly follow up as necessary.</p>
          <p style="font-size: 16px; color: #555;">Best regards,<br/><strong>Mena Oye Booking System</strong></p>
        </div>
      `
    };

    try {
      const response = await fetch('https://mena-oye-backend.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        await Swal.fire('Success', 'Booking submitted successfully!', 'success');
      } else {
        await Swal.fire('Error', 'Something went wrong. Please try again.', 'error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      await Swal.fire('Error', 'Network error. Please try again.', 'error');
    }

    resetFormAndRedirect();
  };

  const resetFormAndRedirect = () => {
    setFormData({
      name: '',
      contact: '',
      rooms: '1',
      price: "350 Ghana Cedis",
      arrival: '',
      arrivalTime: '',
      departure: '',
    });

    navigate("/dashboard");
  };

  return (
    <>
      <div className="back_re">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>Confirm Online Booking</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
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
                      required
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
                    <select
                      className="contactus"
                      name="arrivalTime"
                      value={formData.arrivalTime}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Arrival Time</option>
                      {generateTimeOptions()}
                    </select>
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

            <div className="col-md-6">
              <div className="map_main">
                <div className="map-responsive">
                  <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France"
                    width="600"
                    height="400"
                    frameBorder="0"
                    style={{ border: "0", width: "100%" }}
                    allowFullScreen=""
                    title="Google Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookOnline;
