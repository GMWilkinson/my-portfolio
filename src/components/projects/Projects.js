
import React from "react";
import ProjectIntro from './ProjectIntro';
import ProjectBox from './ProjectBox';
import Contact from '../contact/Contact';

import { Row, Col, Collapse, Card, CardBody, Button }  from 'reactstrap';

const gaProject = [
  {
    id: 1,
    name: 'MakeBook',
    mainImage: '/makebook.png',
    description: <p>This project is made using Node.js, MongoDB, Express,
    ReactJS, JavaScript and SCSS.
    For this project I decided to make an app
    that allows the user to create their own adventure
    game-book and read all the books that have been created by
    other users.</p>,
    link: 'https://makebook.herokuapp.com/'
  },
  {
    id: 2,
    name: 'Eventz',
    mainImage: '/eventz.png',
    description: <p>
    This is the first project that I've made as part of a team.
    We used Node.js, MongoDB, Express, AngularJS, JavaScript, SCSS and HTML.
    We decided to make an event planner app where the user can add,
    join and comment on events.  We used OpenStreetMap and Nominatem
    so that when the user adds an event a pin will be put on the
    map at the event’s location on the show page.
    This project was made mobile-first.
    In the future this project would be made much more useful if
    you could add friends and only the friends could see your events
    and join them.
    </p>,
    link: 'https://wdi-events-project.herokuapp.com/#!/'
  },
  {
    id: 3,
    name: 'MangaBook',
    mainImage: '/mangabook.png',
    description: <p>
      This is the first app that I made with a back-end. It is made with
      Node.js, EJS, Express, MongoDB, JavaScript and CSS.
      I decided to make a Manga review site as I am a huge Manga nerd.
      You can register, login, logout, rate, add your own reviews and
      leave comments.
      This project was made mobile-first.
      In the future I think this app would benefit greatly from
      a table that placed each of the added books from top to bottom
      in order of ratings.
    </p>,
    link: 'http://manga-book.herokuapp.com/'
  },
  {
    id: 4,
    name: 'Codebusters',
    mainImage: '/codebusters.png',
    description: <p>
    This is the first project that I made at General Assembly.
    It uses HTML, CSS and JavaScript.
    I chose to make a quiz game that asks questions
    on HTML, CSS and JavaScript that increase in difficulty
    for each correct answer you give.
    It is not even slightly responsive at the moment and there are some
    bugs, such as the game doesn't end properly. But it
    wouldn't be too hard to fix.
    </p>,
    link: 'https://gmwilkinson.github.io/codebusters/'
  }
]
const comProject = [
  {
    id: 5,
    name: 'TokenAnalyst.io',
    mainImage: '/tokenanalyst:pricing.png',
    description: <p>
    This was an amazing project, it is TokenAnalyst's main website.
    I'd never worked on something so large with so many features
    before. It is made with ReactJS and Redux.
    I worked on the Pricing page,
    About page, FAQ page,
    and the modals. For anyone interested in crypto, this is a great site to visit.
    </p>,
    link: 'https://www.tokenanalyst.io/'
  },
  {
    id: 6,
    name: 'Nodestats',
    mainImage: '/nodestats.png',
    description: <p>Nodestats is a site that tracks activity on different Ethereum nodes
    . I made this site for TokenAnalyst and Bitmex Research. This was my first commercial
    project. It is a ReactJS app with a basic Express server. Displaying such an enormous
    amount of data was daunting at first. The site gets data from 80 different api's and some of the charts
    have over 5000 data points. Formatting this data and displaying it as fast as possible
    was a very exciting challenge.</p>,
    link: 'https://www.nodestats.org/'
  }
]

class Intro extends React.Component {
  constructor() {
    super();
    this.slide = this.slide.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      finishedSection: '',
      newSection: 'hidden',
      animate: ''
     };
  }
  componentDidMount() {
    this.setState(
      state => ({
        animate: ''
      }));
  }

  toggle() {
    this.setState(
      state => ({
        collapse: !state.collapse,
      }));
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
              <h2 className="">Projects</h2>
            </div>
            <div>
              <ProjectIntro />
              <h2 onClick={this.toggle}>Commercial Projects</h2>
              <Row>
              {comProject && comProject.map(
                project =>
                <ProjectBox
                  key={project.id}
                  name={project.name}
                  description={project.description}
                  link={project.link}
                  image={project.mainImage}/>
                )}
              </Row>
              <h2 onClick={this.toggle}>GA Projects</h2>
              <Row>
                {gaProject && gaProject.map(
                  project =>
                  <ProjectBox
                    key={project.id}
                    name={project.name}
                    description={project.description}
                    link={project.link}
                    image={project.mainImage}/>
                  )}
              </Row>
            </div>
          </article>
    );
  }
}

export default Intro;
