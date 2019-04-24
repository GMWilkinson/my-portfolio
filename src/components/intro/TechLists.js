
import React from "react";
import { Collapse, Row, Col, CardBody, Button }  from 'reactstrap';

const technologies = [
  {name: 'HTML'},
  {name: 'CSS'},
  {name: 'JavaScript'},
  {name: 'ReactJS'},
  {name: 'SCSS'},
  {name: 'Node.js'},
  {name: 'AngularJS'},
  {name: 'MongoDB'},
  {name: 'Express'},
  {name: 'jQuery'},
  {name: 'JSON'},
];

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
                <h4 className="" onClick={this.toggle}>Technologies</h4>
              </div>
              <Collapse isOpen={this.state.collapse}>
                <CardBody>
                  <div className="tech-list">
                    {technologies.map(
                      techItem =>
                        <p key={techItem.name}>{techItem.name}</p>
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
