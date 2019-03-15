import React, { Component } from 'react';
import img4 from './static/04.jpg';
import ContactIcons from './ContactIcons';
import { NavLink } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="mid container">
        <div className="big-font" data-aos="fade-in" data-aos-duration="1500">
          {' '}
          Hi!{' '}
        </div>
        <div className="big-font" data-aos="fade-in" data-aos-duration="2000">
          I'm Jon.
        </div>
        <h5
          className="justify-content-center mt-5"
          data-aos="fade-in"
          data-aos-duration="3000"
        >
          I’m a full stack engineer that loves working with APIs to build
          responsive and aesthetic websites with Node.js using modern technologies like
          React. Please check out my <NavLink to="/about">about</NavLink> and{' '}
          <NavLink to="/projects">project</NavLink> page!
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
