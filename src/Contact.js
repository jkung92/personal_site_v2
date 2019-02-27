import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="contact mt-3">
        <h1> Contact me </h1>
        <h5> jkung92@gmail.com </h5>
        <li>
          <a href="mailto:jkung92@gmail.com">
            <i class="fa fa-envelope" />
          </a>
        </li>

        <h2> Connect with me</h2>
        <ul>
          <li>
            <a href="https://www.facebook.com/jon.kung">
              <i class="fab fa-facebook-square" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jon-kung/">
              <i class="fab fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="https://github.com/jon-kung">
              <i class="fab fa-github" />
            </a>
          </li>
          <li>
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
