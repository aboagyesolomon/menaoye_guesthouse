import React from 'react';

const Footer = () => {
    return (
      <footer>
      <div class="footer">
         <div class="container">
            <div class="row">
               <div class="col-md-4">
                  <h3>Contact US</h3>
                  <ul class="conta">
                     <li><i class="fa fa-map-marker" aria-hidden="true"></i> Asamang Tamfoe</li>
                     <li>
                        <i class="fa fa-mobile" aria-hidden="true"></i>
                        <a href="tel:+233530087080">+233 (0) 53 008 7080</a>
                     </li>
                     <li>
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <a href="mailto:menaoye24@gmail.com">menaoye24@gmail.com</a>
                     </li>
                  </ul>
               </div>
               <div class="col-md-4">
                  <h3>Menu Link</h3>
                  <ul class="link_menu">
                     <li class="active"><a href="#">Home</a></li>
                     <li><a href="/about"> About</a></li>
                     <li><a href="/room">Our Rooms</a></li>
                     <li><a href="/gallery">Gallery</a></li>
                     <li><a href="/blog">Blog</a></li>
                     <li><a href="/contact">Contact Us</a></li>
                  </ul>
               </div>
               <div class="col-md-4">
                  <h3>News letter</h3>
                  <form class="bottom_form">
                     <input class="enter" placeholder="Enter your email" type="text" name="Enter your email"/>
                     <button class="sub_btn">subscribe</button>
                  </form>
                  <ul class="social_icon">
                     <li><a href="https://www.facebook.com/kwaku.adu.515581/"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                     <li><a href="https://x.com/menaoye_guest?s=11"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                     <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                     <li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                  </ul>
               </div>
            </div>
         </div>
         <div class="copyright">
            <div class="container">
               <div class="row">
                  <div class="col-md-10 offset-md-1" style={{fontSize: "1px"}}>
                     <p>
                        © 2025 All Rights Reserved,<a href="/"> Dominic Amoako</a>
                        <br/><br/>
                        Distributed by <a href="/" target="_blank">Emir Networking</a>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </footer>
   
    );
};

export default Footer;
