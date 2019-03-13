import React, { Component } from 'react';
import img1 from './01.png';
import img2 from './02.png';
import img3 from './03.png';
import img5 from './05.png';
import './ProjectCard.css';

class ProjectCard extends Component {
  render() {
    const imgStyle = { width: '552px', height: '180px' };

    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col-8">
            <img
              src={img1}
              className="card-img-top"
              alt="..."
              style={imgStyle}
            />
          </div>
          <div className="col-4 shadow">
            <h2>PlayList Maker</h2>
            <h5> Node/Express | jQuery </h5>
            <span className="icon">
              <a href="https://github.com/jon-kung/spotify-web-api-app">
                <i className="fab fa-github mr-3" />
              </a>
              <a href="https://jons-playlist-maker.herokuapp.com">
                <i className="fas fa-external-link-alt mr-3" />
              </a>
            </span>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-8 ">
            <img
              src={img2}
              className="card-img-top"
              alt="..."
              style={imgStyle}
            />
          </div>
          <div className="col-4 shadow">
            <h2>Jobly </h2>
            <h5> React | Node/Express | PostgreSQL </h5>
            <h6 className="icon">
              <a href="https://github.com/jon-kung/react-jobly">
                <i className="fab fa-github mr-3" />
              </a>
              <a href="https://jobly-frontend-jk.herokuapp.com/">
                <i className="fas fa-external-link-alt mr-3" />
              </a>
            </h6>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-8">
            <img
              src={img3}
              className="card-img-top"
              alt="..."
              style={imgStyle}
            />
          </div>
          <div className="col-4 shadow">
            <h2>Microblog </h2>
            <h5> React | Redux | Node/Express </h5>
            <h5 className="icon">
              <a href="https://github.com/jon-kung/react-microblog">
                <i className="fab fa-github" />
              </a>
            </h5>
          </div>
        </div>

        <div className="row mt-3 mb-3">
          <div className="col-8">
            <img
              src={img5}
              className="card-img-top"
              alt="..."
              style={imgStyle}
            />
          </div>

          <div className="col-4 shadow">
            <h2>Lights Out </h2>
            <h5> React </h5>
            <h6 className="icon">
              <a href="https://github.com/jkung92/react-lights-out">
                <i className="fab fa-github" />
              </a>
            </h6>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
