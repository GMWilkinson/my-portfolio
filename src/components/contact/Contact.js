
import React from "react";
import Intro from '../intro/Intro';
import Projects from '../projects/Projects';
import { Row, Col, Card, Button }  from 'reactstrap';

class Contact extends React.Component {
  constructor() {
    super();
    this.slide = this.slide.bind(this);
    this.state = {
      collapse: false,
      finishedSection: '',
      newSection: 'hidden',
      animate: ''
     };
  }

  slide() {
    this.setState({
      animate: 'slide-out',
      newSection: 'slide-in-section'
    })
  }


  render() {
    return (
          <article className={this.state.animate}>
            <div>
              <h2>Contact</h2>
            </div>
            <div>
              <section className="">
                <div className="contact-details">
                  <p>If you fancy a chat or a coffee, feel free to contact me at</p>
                  <p><strong className="">wilkinsonmgrant@gmail.com</strong></p>
                  <p>or</p>
                  <div>
                    <a href="https://github.com/GMWilkinson/">GitHub</a>
                    <a href="https://www.linkedin.com/in/gmwilkinson">LinkedIn</a>
                  </div>
                </div>
              </section>
            </div>
          </article>
    );
  }
}

export default Contact;
