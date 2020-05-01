
import React from "react";

import { CardBody}  from 'reactstrap';

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
        <div>
        {this.props.projectFrom === 'commercial' ?
        <p>
          Commercial
        </p>
        :
        <p>
          GA
        </p>
        }

          <p>I hope that you like them.</p>
        </div>
      </CardBody>
    );
  }
}

export default Intro;
