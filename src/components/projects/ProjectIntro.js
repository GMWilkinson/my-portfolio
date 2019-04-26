
import React from "react";

import { Row, Col, Collapse, CardBody, Button }  from 'reactstrap';

class Intro extends React.Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
      <CardBody>
        <p>
        These are the projects that I have made to date.
        tokenanalyst.io is my most recent project.
        I was given seven days to complete each of the GA projects,
        I haven't done anything to them since so that you can see my progression.
        Nodestats is the project that I am most proud of. It was the first time that I had worked
        with huge amounts of data and google charts. I learned a so much while doing this project.
        <p>I hope that you like them.</p>
        </p>
      </CardBody>
    );
  }
}

export default Intro;
