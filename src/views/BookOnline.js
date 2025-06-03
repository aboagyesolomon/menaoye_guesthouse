import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as Swal from 'sweetalert2';

const generateTimeOptions = () => {
  const times = [];
  const hours = [...Array(12).keys()].map(i => i + 1);
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

const calculateTotalPrice = (arrival, departure, rooms, ratePerDay = 350) => {
  const arrivalDate = new Date(arrival);
  const departureDate = new Date(departure);

  if (isNaN(arrivalDate) || isNaN(departureDate)) return null;

  const timeDiff = departureDate.getTime() - arrivalDate.getTime();
  const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

  if (dayDiff <= 0) return null;

  return ratePerDay * rooms * dayDiff;
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

      const rooms = parseInt(name === "rooms" ? value : prev.rooms);
      const arrivalDate = name === "arrival" ? value : prev.arrival;
      const departureDate = name === "departure" ? value : prev.departure;

      const total = calculateTotalPrice(arrivalDate, departureDate, rooms);

      if (total !== null) {
        updatedData.price = `${total} Ghana Cedis`;
      } else {
        updatedData.price = "Invalid date range";
      }

      return updatedData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const rooms = parseInt(formData.rooms);
    const total = calculateTotalPrice(formData.arrival, formData.departure, rooms);

    if (total === null) {
      await Swal.fire('Error', 'Invalid date range. Please check your arrival and departure dates.', 'error');
      return;
    }

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
      price: `${total} Ghana Cedis`,
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
            <tr><td style="padding: 8px;"><strong>Arrival Time:</strong></td><td style="padding: 8px;">${formData.arrivalTime}</td></tr>
            <tr><td style="padding: 8px;"><strong>Departure:</strong></td><td style="padding: 8px;">${formData.departure}</td></tr>
            <tr><td style="padding: 8px;"><strong>Price:</strong></td><td style="padding: 8px;">${total} Ghana Cedis</td></tr>
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
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2882.641101184582!2d-0.5274145409350155!3d6.368948455899383!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf2ba816fe46b5%3A0x338a1a6341f71c44!2sMenaOye%20Guest%20House!5e0!3m2!1sen!2sgh!4v1748949740280!5m2!1sen!2sgh" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
