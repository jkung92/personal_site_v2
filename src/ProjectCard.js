import React, { Component } from 'react';

class ProjectCard extends Component {
  render() {
    return (
      <div>
        <div class="card" style={{ width: '18rem' }}>
          <img class="card-img-top" src=".../100px180/?text=Image cap" alt="" />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
