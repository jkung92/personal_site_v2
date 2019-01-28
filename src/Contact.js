import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
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
            <a href="https://www.linkedin.com/in/jonathan-kung-66945270/">
              <i class="fab fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="https://github.com/jkung92">
              <i class="fab fa-github" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Contact;
