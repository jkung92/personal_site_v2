import React, { Component } from 'react';
import './Contact.css';
import ContactIcons from './ContactIcons';

class Contact extends Component {
  render() {
    return (
      <div className="contact mt-5" >
        <h1 data-aos="fade-in" data-aos-duration="3000"> Contact me </h1>
        <h5 data-aos="fade-in" data-aos-duration="3000"> jkung92@gmail.com </h5>
        <li data-aos="fade-in" data-aos-duration="3000">
          <a href="mailto:jkung92@gmail.com">
            <i class="fa fa-envelope" />
          </a>
        </li>

        <h2 data-aos="fade-in" data-aos-duration="3000"> Connect with me</h2>
        <ContactIcons></ContactIcons>
      </div>
    );
  }
}

export default Contact;
