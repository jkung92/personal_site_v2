import React, { Component } from 'react';
import img4 from './static/04.jpg';

class About extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="big-font" data-aos="fade-up" data-aos-duration="1000">
          Nice to meet you!
        </div>
        {/* First Row */}
        <div
          className="row justify-content-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="mt-5 med-font text-left col-4 shadow">
            
            I’m a full stack engineer that loves working with APIs to build
            awesome websites using modern technologies like React. Feel free to
            scroll down if you'd like to learn more.
          </div>
          <div className="col-4">
            <img
              className="mt-5"
              src={img4}
              alt=""
              style={{
                height: '150px',
                width: '150px',
                borderRadius: '10%'
                // filter: 'grayscale(100%)'
              }}
            />
          </div>
        </div>
        {/* End of First Row */}
        <div className="row justify-content-center" data-aos="fade-up" data-aos-duration="3000">
          <div className="col-4">
            {/* <img
              className="mt-3"
              src={img4}
              alt=""
              style={{
                height: '150px',
                width: '150px',
                borderRadius: '50%',
                filter: 'grayscale(100%)'
              }}
            /> */}
          </div>
          <div className="mt-5 med-font text-left col-4 shadow">
            My career journey begins as a door-to-door office supply salesman,
            selling paper and printer ink to start-ups and small businesses
            through a sister company of Staples. I was young and looking to work
            as soon as I could, and this was a unique learning opportunity that
            taught me the importance of work ethic and setting goals.
          </div>
        </div>
        {/* End of Second Row */}
        <div className="row justify-content-center" data-aos="fade-up" data-aos-duration="3000">
          <div className="mt-5 med-font col-4 text-left shadow">
            Shortly after, I was referred to a job at LendingClub, a peer to
            peer lending platform. This was my first taste of the bay area
            start-up lifestyle and I was blown away by the selection of drinks
            and snacks in our fully stocked kitchen. In the process, I learned
            how to negotiate payments from delinquent customers. Training and
            mentoring new hires became a part of my daily routine as well.
          </div>
          <div className="col-4">
            {/* <img
              className="mt-5"
              src={img4}
              alt=""
              style={{
                height: '150px',
                width: '150px',
                // borderRadius: '50%',
                filter: 'grayscale(100%)'
              }}
            /> */}
          </div>
        </div>
        {/* End of Third Row */}
        <div className="row justify-content-center" data-aos="fade-up" data-aos-duration="3000">
          <div className="col-4">
            {/* <img
              className="mt-3"
              src={img4}
              alt=""
              style={{
                height: '150px',
                width: '150px',
                borderRadius: '50%',
                filter: 'grayscale(100%)'
              }}
            /> */}
          </div>
          <div className="mt-5 med-font text-left col-4 shadow">
            My most recent gig was at Bloomberg, a software, market data, and
            media company based in NYC. Days were spent troubleshooting software
            and API issues. I worked closely with the engineering team, acting
            as a middleman between our clients and developers. I soon found
            myself wanting to learn more about how exactly things in the
            software world worked and was inspired to pursue a career as a
            developer.
          </div>
        </div>
        {/* End of Fourth Row */}
        <div className="row justify-content-center" data-aos="fade-up" data-aos-duration="3000">
          <div className="mt-5 med-font text-left col-4 shadow">
            Recently, I've graduated from a San Francisco based coding bootcamp
            called Rithm School. As part of the cirriculum, I was able to intern
            at a startup called The Relish, a sports media broadcasting
            platform, where I built core features to improve their content
            management system. This experience has taught me that I can both
            contribute to amazing projects and continue to grow by learning
            something new each day.
          </div>
          <div className="col-4">
            {/* <img
              className="mt-5"
              src={img4}
              alt=""
              style={{
                height: '150px',
                width: '150px',
                borderRadius: '50%',
                filter: 'grayscale(100%)'
              }}
            /> */}
          </div>
        </div>
        {/* End of Fifth Row */}
        <div className="row justify-content-center" data-aos="fade-up" data-aos-duration="3000">
          <div className="col-4" />
          <div className="m-5 med-font text-left col-4 shadow">
            If you made it this far, you're awesome. I'm actively seeking a
            front-end position, feel free to contact me! Thank you for taking
            the time to read this!
          </div>
        </div>
        {/* End of Sixth Row */}
        <div className="big-font m-5">Back to top ↑</div>
      </div>
    );
  }
}

export default About;
