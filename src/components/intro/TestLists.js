
import React from "react";
import { Collapse, Row, Col, CardBody }  from 'reactstrap';

const testing = [
  {name: 'Mocha'},
  {name: 'Chai'}
]

class TestLists extends React.Component {
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
                <h4 className="lists" onClick={this.toggle}>Testing</h4>
              </div>
              <Collapse isOpen={this.state.collapse}>
                <CardBody>
                  <div className="tech-list">
                    {testing.map(
                      testItem =>
                        <p key={testItem.name}>{testItem.name}</p>
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

export default TestLists;
