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
          data-aos="fade-up"
          data-aos-duration="3000"
          style={{fontWeight: '540'}}
        >
          <i class="fas fa-layer-group" /> Full-stack engineer that loves
          working with APIs to build responsive,{' '}
           user-friendly websites using modern
          technologies like {' '}
          <i class="fab fa-react" /> React and <i class="fab fa-node-js" />{' '}
          Node.js! Please check out my <NavLink to="/about">about</NavLink> and{' '}
          <NavLink to="/projects">project</NavLink> page!
        </h5>
        <img
          data-aos="fade-in"
          data-aos-duration="3000"
          className="mt-5"
          src={img4}
          alt=""
          style={{
            height: '130px',
            width: '130px',
            borderRadius: '50%',
            // filter: 'grayscale(100%)'
          }}
        />
        <ContactIcons />
      </div>
    );
  }
}

export default Home;
