
import React from "react";
import Header from './Header';
import Intro from '../intro/Intro';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';
import Current from '../current/Current';

import { CardBody } from 'reactstrap';

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
    if (this.state.counter === 0) {
      return <Header />
    }  if (this.state.counter === 1) {
        return <Intro />
    }  if (this.state.counter === 2) {
        return <Projects />
    }  if (this.state.counter === 3) {
        return <Current />
    }  if (this.state.counter === 4) {
        return <Contact />
    }
  }

  buttonTextNext() {
    if (this.state.counter === 0) {
      return 'Intro'
    }  if (this.state.counter === 1) {
        return 'Projects'
    }  if (this.state.counter === 2) {
        return 'Current'
    }  if (this.state.counter === 3) {
        return 'Contact'
    }
  }

  buttonTextPrev() {
      if (this.state.counter === 1) {
        return 'Title'
    }  if (this.state.counter === 2) {
        return 'Intro'
    }  if (this.state.counter === 3) {
        return 'Projects'
    }  if (this.state.counter === 4) {
      return 'Current'
    }
  }

  slide() {
    this.setState({
      animate: 'slide-out',
      newSection: 'slide-out-section'
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
                  <section>{this.nextState()}</section>
                </div>
              </CardBody>
            </div>
          </div>
        </div>
        <div className="prev-next-box">
        {this.state.counter > 0 ?
        <div className="prev" onClick={this.prev}>{this.buttonTextPrev()}</div>
        :
        <p></p>
        }
        </div>
        <div>
        {this.state.counter < 4 ?
        <div className="next" onClick={this.next}>{this.buttonTextNext()}</div>
        :
        <p></p>
      }
        </div>
      </section>
    );
  }
}

export default Frame;
