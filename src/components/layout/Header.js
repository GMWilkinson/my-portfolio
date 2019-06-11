
import React from "react";
import { CardBody }  from 'reactstrap';

class Header extends React.Component {
  constructor() {
    super();
    this.slide = this.slide.bind(this);
    this.state = {
      animate: ''
    };
  }

  slide() {
    this.setState({
      animate: 'slide-out'
    })
  }

  render() {
    return (
      <header>
        <section className="">
          <div>
            <CardBody>
              <div>
                <h1 className="title">Grant Wilkinson's Portfolio</h1>
              </div>
            </CardBody>
          </div>
        </section>
      </header>
    );
  }
}

export default Header;
