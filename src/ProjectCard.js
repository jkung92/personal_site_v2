import React, { Component } from 'react';
import img1 from './static/01.png';
// import img2 from './static/02.png';
// import img3 from './static/03.png';
// import img5 from './static/05.png';
import './ProjectCard.css';

// Refactoring needed, pass down card info as props

class ProjectCard extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="big-font" data-aos="fade-up" data-aos-duration="1000">
          Projects
        </div>
        {/* <div class="card text-white" style={{
              background: 'rgb(1, 1, 41)',
              opacity: 0.9,
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
            }}>
          <img
            class="card-img"
            src={img1}
            alt="Card"
          />
          <div class="card-img-overlay">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">Last updated 3 mins ago</p>
          </div>
        </div> */}

        {/* End Testing */}
        <div className="row mt-5">
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="col-sm m-2 shadow2"
            style={{
              opacity: 0.6
            }}
          >
            <h2 style={{ color: 'lightsalmon' }}>PlayList Maker</h2>
            <h5 style={{ color: '#61b8ff' }}>Express | Nunjucks</h5>
            <span className="icon">
              <a href="https://github.com/jon-kung/spotify-web-api-app">
                <i className="fab fa-github mr-3" />
              </a>
              <a href="https://jons-playlist-maker.herokuapp.com">
                <i className="fas fa-external-link-alt mr-3" />
              </a>
            </span>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="col-sm m-2 shadow2"
            style={{
              opacity: 0.6
            }}
          >
            <h2 style={{ color: 'indianred' }}>Jobly</h2>
            <h5 style={{ color: '#61b8ff' }}>React | Express | Postgres</h5>
            <h6 className="icon">
              <a href="https://github.com/jon-kung/react-jobly">
                <i className="fab fa-github mr-3" />
              </a>
              <a href="https://jobly-frontend-jk.herokuapp.com/">
                <i className="fas fa-external-link-alt mr-3" />
              </a>
            </h6>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2500"
            className="col-sm m-2 shadow2"
            style={{
              opacity: 0.6
            }}
          >
            <h2 style={{ color: 'darksalmon' }}>Microblog</h2>
            <h5 style={{ color: '#61b8ff' }}>React | Redux | Express</h5>
            <h5 className="icon">
              <a href="https://github.com/jon-kung/react-microblog">
                <i className="fab fa-github" />
              </a>
            </h5>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="col-sm m-2 shadow2"
            style={{
              opacity: 0.6
            }}
          >
            <h2 style={{ color: 'salmon' }}>HackerSnooze </h2>
            <h5 style={{ color: '#61b8ff' }}>Javascript | HTML | CSS</h5>
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
