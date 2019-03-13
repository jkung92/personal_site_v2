import React, { Component } from 'react';
// import img1 from './static/01.png';
// import img2 from './static/02.png';
// import img3 from './static/03.png';
// import img5 from './static/05.png';
import './ProjectCard.css';

// Refactoring needed, pass down card info as props

class ProjectCard extends Component {
  render() {
  return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm m-2 shadow">
            <h2>PlayList Maker</h2>
            <h5> Express | Nunjucks </h5>
            <span className="icon">
              <a href="https://github.com/jon-kung/spotify-web-api-app">
                <i className="fab fa-github mr-3" />
              </a>
              <a href="https://jons-playlist-maker.herokuapp.com">
                <i className="fas fa-external-link-alt mr-3" />
              </a>
            </span>
          </div>

          <div className="col-sm m-2 shadow">
            <h2>Jobly</h2>
            <h5> React | Express | PostgreSQL </h5>
            <h6 className="icon">
              <a href="https://github.com/jon-kung/react-jobly">
                <i className="fab fa-github mr-3" />
              </a>
              <a href="https://jobly-frontend-jk.herokuapp.com/">
                <i className="fas fa-external-link-alt mr-3" />
              </a>
            </h6>
          </div>

          <div className="col-sm m-2 shadow">
            <h2>Microblog </h2>
            <h5> React | Redux | Express </h5>
            <h5 className="icon">
              <a href="https://github.com/jon-kung/react-microblog">
                <i className="fab fa-github" />
              </a>
            </h5>
          </div>

          <div className="col-sm m-2 shadow">
            <h2>HackerSnooze </h2>
            <h5> Javascript | HTML | CSS </h5>
            <h6 className="icon">
              <a href="https://github.com/jon-kung/Hacker-News-Clone">
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
