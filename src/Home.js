import React, { Component } from 'react';
import img4 from './static/04.jpg';
import ContactIcons from './ContactIcons';

class Home extends Component {
  render() {
    return (
      <div className="mid container">
        <div className="big-font" data-aos="fade-in" data-aos-duration="1500">
          {' '}
          Hi!{' '}
        </div>
        <div className="big-font" data-aos="fade-in" data-aos-duration="2000">
          {' '}
          I'm Jon.
        </div>
        <h5
          className="justify-content-center mt-5 colored"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          I’m a full stack engineer that loves working with APIs to build
          awesome websites using modern technologies like React. Please check
          out my about and project page!
        </h5>
        <ContactIcons />

        <img
          className="mt-5"
          src={img4}
          alt=""
          style={{
            height: '150px',
            width: '150px',
            borderRadius: '50%'
          }}
        />
      </div>
    );
  }
}

export default Home;
