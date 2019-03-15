import React, { Component } from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import ContactIcons from './ContactIcons';

class About extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="big-font" data-aos="fade-up" data-aos-duration="1000">
          My Career Journey
        </div>
        <Timeline lineColor={'#ddd'}>
          <TimelineItem
            key="005"
            dateText="3/2019 – Today"
            dateInnerStyle={{ background: 'lightsalmon', color: 'white' }}
            bodyContainerStyle={{
              background: 'rgb(1, 1, 41)',
              opacity: 0.6,
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
            }}
          >
            <h3 style={{ color: '#61b8ff' }}> Open to opportunities </h3>
            <h4 style={{ color: '#61b8ff' }}>Front-End | Full-Stack</h4>
            <p style={{ color: 'white' }}>
              I'm actively seeking a front-end or full-stack position, feel free
              to connect with me or shoot me an email at jkung92@gmail.com.
            </p>
          </TimelineItem>
          <TimelineItem
            key="004"
            dateText="1/2019 – 2/2019"
            dateInnerStyle={{ background: 'indianred', color: 'white' }}
            bodyContainerStyle={{
              background: 'rgb(1, 1, 41)',
              opacity: 0.6,
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
            }}
          >
            <h3 style={{ color: '#61b8ff' }}> The Relish</h3>
            <h4 style={{ color: '#61b8ff' }}>Software Engineer Intern</h4>
            <p style={{ color: 'white' }}>
              Recently, I've graduated from a San Francisco based coding
              bootcamp called Rithm School. As part of the cirriculum, I was
              able to intern at a startup called The Relish, a sports media
              broadcasting platform, where I built core features to improve
              their content management system. This experience has taught me
              that I can both contribute to amazing projects and continue to
              grow by learning something new each day.
            </p>
          </TimelineItem>

          <TimelineItem
            key="003"
            dateText="12/2016 – 5/2018"
            dateInnerStyle={{ background: '#61b8ff', color: 'white' }}
            bodyContainerStyle={{
              background: 'rgb(1, 1, 41)',
              opacity: 0.6,
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
            }}
          >
            <h3 style={{ color: '#61b8ff' }}> Bloomberg </h3>
            <h4 style={{ color: '#61b8ff' }}>Implementation Specialist</h4>
            <p style={{ color: 'white' }}>
              At Bloomberg, days were spent troubleshooting software and API
              issues. I worked closely with the engineering team, acting as a
              middleman between our clients and developers. I soon found myself
              wanting to learn more about how exactly things in the software
              world worked and was inspired to pursue a career as a developer.
            </p>
            <p style={{ color: 'white' }}>
              My proudest achievement here was providing a solution to an Excel Worksheet issue first
              reported in 2015 on the Microsoft Forums. You can checkout the
              details and my response{' '}
              <a
                href="https://answers.microsoft.com/en-us/msoffice/forum/all/excel-skips-to-another-workbook-for-no-apparent/272ccfbf-5aca-43f4-8e8f-c55a38043a0e?page=8"
                target={'_blank'}
              >
                here
              </a>
              .
            </p>
          </TimelineItem>
          <TimelineItem
            key="002"
            dateText="12/2014 – 12/2016"
            dateInnerStyle={{ background: '#e86971', color: 'white' }}
            bodyContainerStyle={{
              background: 'rgb(1, 1, 41)',
              opacity: 0.6,
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
            }}
          >
            <h3 style={{ color: '#61b8ff' }}> LendingClub</h3>
            <h4 style={{ color: '#61b8ff' }}>Payment Specialist</h4>
            <p style={{ color: 'white' }}>
              LendingClub is a peer to peer lending platform, like Uber but for
              personal loans. This was my first taste of the bay area start-up
              lifestyle and I was blown away by the selection of drinks and
              snacks in our fully stocked kitchen. In the process, I learned how
              to negotiate payments from delinquent customers. Training and
              mentoring new hires became a part of my daily routine as well.
            </p>
            <p style={{ color: 'white' }}>
              Most notably, I was ranked #1 agent among my peers (70+ reps)
              through all of Q2, and went above my role by assisting a new
              supervisor and his new hire team during onboarding.
            </p>
          </TimelineItem>

          <TimelineItem
            key="001"
            dateText="12/2013 – 4/2014"
            dateInnerStyle={{ background: 'salmon', color: 'white' }}
            bodyContainerStyle={{
              background: 'rgb(1, 1, 41)',
              opacity: 0.6,
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
            }}
          >
            <h3 style={{ color: '#61b8ff' }}> Summit Solutions </h3>
            <h4 style={{ color: '#61b8ff' }}>Lead Account Manager</h4>
            <p style={{ color: 'white' }}>
              My career journey began as a door-to-door office supply salesman,
              selling paper and printer ink to start-ups and small businesses
              through a sister company of Staples. I was young and looking to
              work as soon as I could, and this was a unique learning
              opportunity that taught me the importance of work ethic and
              setting goals.
            </p>
            <p style={{ color: 'white' }}>
              I was able to sell over $16,000 worth of office supplies within 4
              months.
            </p>
          </TimelineItem>
        </Timeline>
        <div>
          <ContactIcons />
        </div>
      </div>
    );
  }
}

export default About;
