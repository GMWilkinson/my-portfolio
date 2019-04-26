
import React from "react";
import Projects from '../projects/Projects';
import TechLists from './TechLists';
import MethLists from './MethLists';
import Testing from './TestLists';
import Frameworks from './FrameworksLists';

import { Card, Row, Col, UncontrolledCollapse, CardBody, Button }  from 'reactstrap';

class Intro extends React.Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      image: ''
     };
  }


  toggle() {
    this.setState(
      state => ({
        collapse: !state.collapse
      }));
  }

  slide() {
    this.setState({
      animate: 'slide-out',
      newSection: 'slide-in-section'
    })
  }


  render() {
    return (
      <article>
        <div className="">
          <h2 className="" id="about">About</h2>
        </div>
        <div>
          <p>Thanks for taking the time to check out my portfolio.</p>
          <p>I'm from London and have just finished my first commercial contract at TokenAnalyst,
           I have also completed the Immersive Web Development course at GA.</p>
          <p>I am currently focusing on ReactJS, node.js
          and keeping my vanilla javascript up to date</p> 
          <p>Really enjoying coding and just wish I'd gotten into it sooner.</p>
          <p>I'm currently looking for new opportunities as a Junior Developer.</p>
            <Row>
              <Col>
                <TechLists />
              </Col>
              <Col>
                <MethLists />
              </Col>
              <Col>
                <Testing />
              </Col>
              <Col>
                <Frameworks />
              </Col>
          </Row>
        </div>
      </article>
    );
  }
}

export default Intro;
