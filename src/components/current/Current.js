
import React from "react";
import ProjectBox from '../projects/ProjectBox';

import { Row }  from 'reactstrap';

const currentProject = [
  {
    id: 1,
    name: 'Not Named Yet',
    description: <p>
    I am making a Jack the Ripper based mystery game. The user is a
    Private Eye that is on the hunt for a copycat killer. The user will have to solve clues
    based on the Victorian hunt for Jack the Ripper. I will use images of the modern day
    places where the crimes took place.
    </p>
  },
  {
    id: 2,
    name: 'Not Named Yet',
    description: <p>
    This is an app where the user can create a blog. It is still very early in development,
    I have found it more difficult than I had first imagined but that is only making it
    more exciting as a challenge. The main problem I have found is for the user to add images
    anywhere that they like on a post. I am playing with the idea that the user will
    type (image) and I will use string.split('(image)') to isolate where the user
    wants the image placed. I am currently using this system to seperate paragraphs.
    </p>
  }
]


class Current extends React.Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      finishedSection: ''
     };
  }

  toggle() {
    this.setState(
      state => ({
        collapse: !state.collapse,
      }));
  }

  render() {
    return (
      <article className="current">
        <div>
          <h2 className="" id="current">My Current Projects</h2>
        </div>
        <div>
          <Row>
          {currentProject && currentProject.map(
            project =>
            <ProjectBox
              key={project.id}
              name={project.name}
              description={project.description}
              />
            )}
          </Row>
        </div>
      </article>
    );
  }
}

export default Current;
