import React, { Component } from 'react';
import img4 from './04.jpg';

class About extends Component {
  render() {
    return (
      <div className="container">
        <h1> Nice to meet you! </h1>
        <img
          src={img4}
          alt=""
          style={{ height: '250px', width: '250px', borderRadius: '50%' }}
        />
        <p>
          I’m a full stack engineer currently attending Rithm School’s ninth
          cohort. From school, I've learned that I'm a huge fan of working with
          APIs that allow me to build amazing websites. I am actively seeking a
          front-end engineer role, feel free to connect with me!
        </p>
      </div>
    );
  }
}

export default About;
