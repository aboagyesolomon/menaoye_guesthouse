import React from "react";
import Carousel from "../components/Carousel";
import ComingSoon from "./CoomingSoon";

const DashBoard = () => {

    return(<>
          <Carousel/>

         <div class="about">
         <div class="container-fluid">
            <div class="row">
               <div class="col-md-5">
                  <div class="titlepage">
                     <h2>About Us</h2>
                     <p>Founded in November 2024 in loving memory of <strong>Madam Gladys Ardey Kortey</strong>, Mena Oye Guest House located at Asamang Tamfoe  was created to reflect the warmth, care, and generosity she embodied.
                        <br /><br />
                        We offer more than accommodation—we offer a home away from home. Every guest is welcomed with authentic hospitality and treated with heartfelt attention.
                        <br /><br />
                        Our motto, <strong>“Your satisfaction and comfort is our goal,”</strong> guides everything we do. We value your feedback and are always working to improve.
                        <br /><br />
                        Whether you're visiting for business or relaxation, we’re here to make your stay peaceful, personal, and memorable.
                     </p>
                     <a class="read_more" href="Javascript:void(0)"> Read More</a>
                  </div>
               </div>
               <div class="col-md-7">
                  <div class="about_img">
                     <figure><img src="assets/images/rooom3.jpg" alt="#"/></figure>
                     
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div  class="our_room">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h2>Our Rooms</h2>
                     <p>Lorem Ipsum available, but the majority have suffered </p>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-md-4 col-sm-6">
                  <div id="serv_hover"  class="room">
                     <div class="room_img">
                        <figure><img src="assets/images/rooom6.JPG" alt="#"/></figure>
                     </div>
                     <div class="bed_room">
                        <h3>Bed Room</h3>
                        <p>If you are going to use a passage of pleasure, you need to be sure there </p>
                     </div>
                  </div>
               </div>
               <div class="col-md-4 col-sm-6">
                  <div id="serv_hover"  class="room">
                     <div class="room_img">
                        <figure><img src="assets/images/rooom7.JPG" alt="#"/></figure>
                     </div>
                     <div class="bed_room">
                        <h3>Bed Room</h3>
                        <p>If you are going to use a passage of peace, you need to be sure there </p>
                     </div>
                  </div>
               </div>
               <div class="col-md-4 col-sm-6">
                  <div id="serv_hover"  class="room">
                     <div class="room_img">
                        <figure><img src="assets/images/rooom8.JPG" alt="#"/></figure>
                     </div>
                     <div class="bed_room">
                        <h3>Wash Room</h3>
                        <p>If you are going to use a passage of comfort, you need to be sure there </p>
                     </div>
                  </div>
               </div>
               <div class="col-md-4 col-sm-6">
                  <div id="serv_hover"  class="room">
                     <div class="room_img">
                        <figure><img src="assets/images/rooom4.jpg" alt="#"/></figure>
                     </div>
                     <div class="bed_room">
                        <h3>Bath Room</h3>
                        <p>If you are going to use a passage of comfort, you need to be sure there </p>
                     </div>
                  </div>
               </div>
               <div class="col-md-4 col-sm-6">
                  <div id="serv_hover"  class="room">
                     <div class="room_img">
                        <figure><img src="assets/images/rooom5.jpg" alt="#"/></figure>
                     </div>
                     <div class="bed_room">
                        <h3>Kitchen</h3>
                        <p>Kitchens, in every room we take care of your cravings as well as your comfort.</p>
                     </div>
                  </div>
               </div>
               <div class="col-md-4 col-sm-6">
                  <div id="serv_hover"  class="room">
                     <div class="room_img">
                        <figure><img src="assets/images/rooom3.jpg" alt="#"/></figure>
                     </div>
                     <div class="bed_room">
                        <h3>Hall Way</h3>
                        <p>If you are going to use a passage of comfort, you need to be sure there </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div  class="gallery">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h2>gallery</h2>
                  </div>
               </div>
            </div>
            <div class="row">
               {/* <div class="col-md-3 col-sm-6">
                  <div class="gallery_img">
                     <figure><img src="assets/images/gallery1.jpg" alt="#"/></figure>
                  </div>
               </div>
               <div class="col-md-3 col-sm-6">
                  <div class="gallery_img">
                     <figure><img src="assets/images/gallery2.jpg" alt="#"/></figure>
                  </div>
               </div>
               <div class="col-md-3 col-sm-6">
                  <div class="gallery_img">
                     <figure><img src="assets/images/gallery3.jpg" alt="#"/></figure>
                  </div>
               </div>
               <div class="col-md-3 col-sm-6">
                  <div class="gallery_img">
                     <figure><img src="assets/images/gallery4.jpg" alt="#"/></figure>
                  </div>
               </div>
               <div class="col-md-3 col-sm-6">
                  <div class="gallery_img">
                     <figure><img src="assets/images/gallery5.jpg" alt="#"/></figure>
                  </div>
               </div>
               <div class="col-md-3 col-sm-6">
                  <div class="gallery_img">
                     <figure><img src="assets/images/gallery6.jpg" alt="#"/></figure>
                  </div>
               </div>
               <div class="col-md-3 col-sm-6">
                  <div class="gallery_img">
                     <figure><img src="assets/images/gallery7.jpg" alt="#"/></figure>
                  </div>
               </div>
               <div class="col-md-3 col-sm-6">
                  <div class="gallery_img">
                     <figure><img src="assets/images/gallery8.jpg" alt="#"/></figure>
                  </div>
               </div> */}
                <ComingSoon />
            </div>
         </div>
      </div>
      <div  class="blog">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h2>Blog</h2>
                     <p>Our Lastest blog, comfort and satisfaction our concern </p>
                  </div>
               </div>
            </div>
            <div class="row">
               {/* <div class="col-md-4">
                  <div class="blog_box">
                     <div class="blog_img">
                        <figure><img src="assets/images/blog1.jpg" alt="#"/></figure>
                     </div>
                     <div class="blog_room">
                        <h3>Bed Room</h3>
                        <span>The standard chunk </span>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you are   </p>
                     </div>
                  </div>
               </div>
               <div class="col-md-4">
                  <div class="blog_box">
                     <div class="blog_img">
                        <figure><img src="assets/images/blog2.jpg" alt="#"/></figure>
                     </div>
                     <div class="blog_room">
                        <h3>Bed Room</h3>
                        <span>The standard chunk </span>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you are   </p>
                     </div>
                  </div>
               </div>
               <div class="col-md-4">
                  <div class="blog_box">
                     <div class="blog_img">
                        <figure><img src="assets/images/blog3.jpg" alt="#"/></figure>
                     </div>
                     <div class="blog_room">
                        <h3>Bed Room</h3>
                        <span>The standard chunk </span>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you are   </p>
                     </div>
                  </div>
               </div> */}
                <ComingSoon />
            </div>
         </div>
      </div>
    </>)


};

export default DashBoard;