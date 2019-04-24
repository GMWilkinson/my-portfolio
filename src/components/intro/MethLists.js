
import React from "react";
import { Collapse, Row, Col, CardBody, Button }  from 'reactstrap';

const methodologies = [
  {name: 'Trello'},
  {name: 'Insomnia'},
  {name: 'GitHub'},
  {name: 'Heroku'},
]

class MethLists extends React.Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false
    };
  }

  toggle(column) {
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
                <h4 className="" onClick={this.toggle}>Methodologies</h4>
              </div>
              <Collapse isOpen={this.state.collapse}>
                <CardBody>
                  <div className="tech-list">
                    {methodologies.map(
                      methItem =>
                        <p key={methItem.name}>{methItem.name}</p>
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

export default MethLists;
