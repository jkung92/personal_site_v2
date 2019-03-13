import React, { Component } from 'react';
import img4 from './04.jpg';

class About extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="big-font" data-aos="fade-in" data-aos-duration="1000">
          {' '}
          Nice to meet you!{' '}
        </div>
        <p className="mt-5" data-aos="fade-in" data-aos-duration="2000">
          I’m a full stack engineer. I love working with APIs to build awesome
          websites using modern technologies like React. I am actively seeking a
          front-end engineer role, feel free to connect with me!
        </p>
        <img
          className="mt-3"
          data-aos="fade-in"
          data-aos-duration="3000"
          src={img4}
          alt=""
          style={{
            height: '150px',
            width: '150px',
            borderRadius: '50%',
            filter: 'grayscale(100%)'
          }}
        />
      </div>
    );
  }
}

export default About;
