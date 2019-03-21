import React, { Component } from 'react';
// import img1 from './static/01.png';
// import img2 from './static/02.png';
// import img3 from './static/03.png';
// import img5 from './static/05.png';
import relish_screens from './static/relish.gif';
import './ProjectCard.css';

// Refactoring needed, pass down card info as props
// TODO: Create a relish screenshot comp

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      isToggleOn2: true,
      isToggleOn3: true,
      isToggleOn4: true
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  };

  handleClick2 = () => {
    this.setState(prevState => ({
      isToggleOn2: !prevState.isToggleOn2
    }));
  };

  handleClick3 = () => {
    this.setState(prevState => ({
      isToggleOn3: !prevState.isToggleOn3
    }));
  };

  handleClick4 = () => {
    this.setState(prevState => ({
      isToggleOn4: !prevState.isToggleOn4
    }));
  };

  renderFirstCard = () => {
    return (
      <span>
        <h2 style={{ color: 'lightsalmon' }}>PlayList Maker</h2>
        <h5 style={{ color: '#61b8ff' }}>Express | Nunjucks</h5>
        <span className="icon">
          <a
            href="https://github.com/jon-kung/spotify-web-api-app"
            target={'_blank'}
          >
            <i className="fab fa-github mr-3" />
          </a>
          <a href="https://jons-playlist-maker.herokuapp.com" target={'_blank'}>
            <i className="fas fa-external-link-alt mr-3" />
          </a>
        </span>
      </span>
    );
  };

  renderSecondCard = () => {
    return (
      <span>
        <h2 style={{ color: 'indianred' }}>Jobly</h2>
        <h5 style={{ color: '#61b8ff' }}>React | Express | Postgres</h5>
        <span className="icon">
          <a href="https://github.com/jon-kung/react-jobly" target={'_blank'}>
            <i className="fab fa-github mr-3" />
          </a>
          <a href="https://jobly-frontend-jk.herokuapp.com/" target={'_blank'}>
            <i className="fas fa-external-link-alt mr-3" />
          </a>
        </span>
      </span>
    );
  };

  renderThirdCard = () => {
    return (
      <span>
        <h2 style={{ color: 'darksalmon' }}>The Relish CMS</h2>
        <h5 style={{ color: '#61b8ff' }}>React | Redux | D3</h5>
        <span className="icon">
          <a href={relish_screens} target={'_blank'}>
            <i className="fas fa-external-link-alt" />
          </a>
        </span>
      </span>
    );
  };

  renderFourthCard = () => {
    return (
      <span>
        <h2 style={{ color: 'salmon' }}>HackerSnooze </h2>
        <h5 style={{ color: '#61b8ff' }}>Javascript | HTML | CSS</h5>
        <span className="icon">
          <a
            href="https://github.com/jon-kung/Hacker-News-Clone"
            target={'_blank'}
          >
            <i className="fab fa-github" />
          </a>
        </span>
      </span>
    );
  };

  render() {
    return (
      <div className="container mt-5 mb-5">
        <div className="big-font" data-aos="fade-up" data-aos-duration="1000">
          Projects
        </div>
        <p data-aos="fade-up" data-aos-duration="2000">
          {' '}
          Click on each project for more details!
        </p>

        <div className="row mt-5">
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="col-sm m-2 shadow2"
            style={{
              opacity: 0.6
            }}
            onClick={this.handleClick}
          >
            {this.state.isToggleOn ? (
              this.renderFirstCard()
            ) : (
              <p data-aos="fade-in" data-aos-duration="2500">
                Playlist Maker is the first side-project I built out
                of my love for music! Please checkout the GitHub
                link for more details.
              </p>
            )}
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="col-sm m-2 shadow2"
            style={{
              opacity: 0.6
            }}
            onClick={this.handleClick2}
          >
            {this.state.isToggleOn2 ? (
              this.renderSecondCard()
            ) : (
              <p data-aos="fade-in" data-aos-duration="2500">
                Jobly is a full-stack job application website I built during
                bootcamp. Please use abc123 as both the username/password if
                you'd like to check it out!
              </p>
            )}
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2500"
            className="col-sm m-2 shadow2"
            style={{
              opacity: 0.6
            }}
            onClick={this.handleClick3}
          >
            {this.state.isToggleOn3 ? (
              this.renderThirdCard()
            ) : (
              <p data-aos="fade-in" data-aos-duration="2500">
                The Relish is a sports media start-up that I interned at. I was
                able to implement search functionality, data visualization, and
                unit tests using Jest.
              </p>
            )}
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="col-sm m-2 shadow2"
            style={{
              opacity: 0.6
            }}
            onClick={this.handleClick4}
          >
            {this.state.isToggleOn4 ? (
              this.renderFourthCard()
            ) : (
              <p data-aos="fade-in" data-aos-duration="2500">
                This site is a clone of hackernews.com, a full-stack app built
                with Javascript, jQuery, and an OOP design.
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
