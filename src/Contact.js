import React, { Component } from 'react';
import resume from './static/Resume.pdf';

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
        <h1 data-aos="fade-in" data-aos-duration="3000"> View my Resume </h1>
        <li data-aos="fade-in" data-aos-duration="3000">
          <a href={resume} target={"_blank"}>
            <i class="fas fa-file" />
          </a>
        </li>

        <h1 data-aos="fade-in" data-aos-duration="3000"> Connect with me</h1>
        <ContactIcons></ContactIcons>
      </div>
    );
  }
}

export default Contact;
