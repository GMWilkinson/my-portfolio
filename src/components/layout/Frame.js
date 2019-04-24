
import React from "react";
import Header from './Header';
import Intro from '../intro/Intro';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';

import { Card, CardBody, Collapse, Row, Button } from 'reactstrap';

class Frame extends React.Component {
  constructor() {
    super();
    this.slide = this.slide.bind(this);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
      finishedSection: '',
      newSection: 'hidden',
      animate: '',
      counter: 0
    };
  }

  next() {
    this.setState({
      counter: this.state.counter +1
    })
  }

  prev() {
    this.setState({
      counter: this.state.counter -1
    })
  }

  nextState() {
    console.log('test', this.state.counter)
    if (this.state.counter === 0) {
      return <Header />
    }  if (this.state.counter === 1) {
        return <Intro />
    }  if (this.state.counter === 2) {
        return <Projects />
    }  if (this.state.counter === 3) {
        return <Contact />
    }
  }

  slide() {
    this.setState({
      animate: 'slide-out',
      newSection: 'slide-in-section'
    })
  }

  render() {
    return (
      <section >
        <div className="header-box">
          <div className="header">
            <div>
              <CardBody>
                <div>
                  <h1 className={this.slide}>{this.nextState()}</h1>
                </div>
              </CardBody>
            </div>
          </div>
        </div>
        <div>
        {this.state.counter > 0 ?
        <Button className="prev" onClick={this.prev} outline>Previous</Button>
        :
        <p></p>
        }
        </div>
        <div>
        {this.state.counter < 3 ?
        <Button className="next" onClick={this.next} outline>Next</Button>
        :
        <p></p>
      }
        </div>
      </section>
    );
  }
}

export default Frame;
