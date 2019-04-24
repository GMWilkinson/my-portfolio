
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
        MakeBook is my most recent project and even though it doesn't look
        amazing at the moment, I am still immensely proud of it. I am in the process of making a prettier and more user friendly version. So watch this space!
        I was given seven days to complete each of these projects,
        I haven't done anything to them since so that you can see my progression.
        I hope that you like them.
        </p>
      </CardBody>
    );
  }
}

export default Intro;
