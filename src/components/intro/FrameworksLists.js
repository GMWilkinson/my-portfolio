
import React from "react";
import { Collapse, Row, Col, CardBody, Button }  from 'reactstrap';

const cssFrameWorks = [
  {name: 'Bulma'},
  {name: 'Bootstrap'}
]

class TechLists extends React.Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false
    };
  }

  toggle() {
    this.setState(
      state => ({
        collapse: !state.collapse
      }));
  }

  render() {
    return (
      <Row>
        <Col>
          <CardBody>
            <article className="">
              <div className="">
                <h4 className="" onClick={this.toggle}>CSS Frameworks</h4>
              </div>
              <Collapse isOpen={this.state.collapse}>
                <CardBody>
                  <div className="tech-list">
                    {cssFrameWorks.map(
                      cssItem =>
                        <p key={cssItem.name}>{cssItem.name}</p>
                    )}
                  </div>
                </CardBody>
              </Collapse>
            </article>
          </CardBody>
        </Col>
      </Row>
    );
  }
}

export default TechLists;
