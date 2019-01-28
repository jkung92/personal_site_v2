import React, { Component } from 'react';
import img4 from './04.jpg';

class About extends Component {
  render() {
    return (
      <div>
        <h1> Nice to meet you! </h1>
        <img
          src={img4}
          alt=""
          style={{ height: '250px', width: '250px', borderRadius: '50%' }}
        />
        <p>
          I’m a full stack engineer currently attending Rithm School’s ninth
          cohort. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Mollitia unde itaque nesciunt adipisci rem. Voluptatem id placeat
          voluptas, obcaecati beatae quos expedita inventore sed. Fuga beatae
          officiis consequuntur perspiciatis nobis.
        </p>
      </div>
    );
  }
}

export default About;
