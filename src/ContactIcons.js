import React, { Component } from 'react';
import './ContactIcons.css';

class ContactIcons extends Component {
  render() {
    return (
      <ul id="contact-icons">
        <li data-aos="fade-in" data-aos-duration="3000">
          <a href="https://www.linkedin.com/in/jon-kung/" target={"_blank"}>
            <i class="fab fa-linkedin" />
          </a>
        </li>
        <li data-aos="fade-in" data-aos-duration="3000">
          <a href="https://github.com/jon-kung" target={"_blank"}>
            <i class="fab fa-github" />
          </a>
        </li>
        <li data-aos="fade-in" data-aos-duration="3000">
          <a href="https://angel.co/jonathan-kung-4" target={"_blank"}>
            <i class="fab fa-angellist" />
          </a>
        </li>
      </ul>
    );
  }
}

export default ContactIcons;
