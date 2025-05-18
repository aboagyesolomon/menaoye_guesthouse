import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Carousel = () => {
   const [arrival, setArrival] = useState('');
   const [departure, setDeparture] = useState('');
   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();
      navigate('/bookonline', {
        state: { arrival, departure },
      });
    };

    return (
        <div>
            <section class="banner_main">
         <div id="myCarousel" class="carousel slide banner" data-ride="carousel">
            <ol class="carousel-indicators">
               <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
               <li data-target="#myCarousel" data-slide-to="1"></li>
               <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
               <div class="carousel-item active">
                  <img class="first-slide" src="assets/images/slide1.jpg" alt="First slide"/>
                  <div class="container">
                  </div>
               </div>
               <div class="carousel-item">
                  <img class="second-slide" src="assets/images/front.jpg" alt="Second slide"/>
               </div>
               <div class="carousel-item">
                  <img class="third-slide" src="assets/images/slide3.jpg" alt="Third slide"/>
               </div>
            </div>
            <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
            </a>
         </div>
         <div class="booking_ocline">
            <div class="container">
               <div class="row">
                  <div class="col-md-5">
                     <div class="book_room">
                        <h1>Book a Room Online</h1>
                        <form class="book_now" onSubmit={handleSubmit}>
                           <div class="row">
                              {/* <div class="col-md-12">
                                 <span>Name</span>
                                 <input class="online_book" placeholder="Full Name" type="text" name="FUll Name"/>
                              </div> */}
                              {/* <div class="col-md-12">
                                 <span>Phone Number</span>
                                 <input class="online_book" placeholder="Contact" type="number" name="Contact"/>
                              </div> */}
                              {/* <div class="col-md-12">
                                 <span>Number of Rooms</span>
                                 <select class="online_book" placeholder="Number of Rooms" type="number" name="Number of Rooms">
                                    <option>--Select Number of Rooms--</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                    <option>13</option>
                                    <option>14</option>
                                    <option>15</option>
                                 </select>
                              </div> */}
                              <div class="col-md-12">
                                 <span>Arrival</span>
                                 <input class="online_book" placeholder="dd/mm/yyyy" type="date" name="dd/mm/yyyy" value={arrival} onChange={(e) => setArrival(e.target.value)} required/>
                              </div>
                              <div class="col-md-12">
                                 <span>Departure</span>
                                 <input class="online_book" placeholder="dd/mm/yyyy" type="date" name="dd/mm/yyyy" value={departure} onChange={(e) => setDeparture(e.target.value)} required/>
                              </div>
                              <div class="col-md-12">
                                 <button class="book_btn" type='submit'>Book Now</button>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
        </div>
    );
};

export default Carousel;
