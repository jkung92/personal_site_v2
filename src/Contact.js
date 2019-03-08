import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="contact mt-5" >
        <h1 data-aos="fade-right" data-aos-duration="3000"> Contact me </h1>
        <h5 data-aos="fade-left" data-aos-duration="3000"> jkung92@gmail.com </h5>
        <li data-aos="zoom-in" data-aos-duration="3000">
          <a href="mailto:jkung92@gmail.com">
            <i class="fa fa-envelope" />
          </a>
        </li>

        <h2 data-aos="fade-right" data-aos-duration="1500"> Connect with me</h2>
        <ul>
          <li data-aos="zoom-in" data-aos-duration="1500">
            <a href="https://www.facebook.com/jon.kung">
              <i class="fab fa-facebook-square" />
            </a>
          </li>
          <li data-aos="zoom-in" data-aos-duration="2000">
            <a href="https://www.linkedin.com/in/jon-kung/">
              <i class="fab fa-linkedin" />
            </a>
          </li>
          <li data-aos="zoom-in" data-aos-duration="2500" >
            <a href="https://github.com/jon-kung">
              <i class="fab fa-github" />
            </a>
          </li>
          <li data-aos="zoom-in" data-aos-duration="3000">
            <a href="https://angel.co/jonathan-kung-4">
              <i class="fab fa-angellist" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Contact;
