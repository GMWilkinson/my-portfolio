
import React from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button }  from 'reactstrap';

class ProjectBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      modal: false
     };
     this.toggle = this.toggle.bind(this);
     this.toggleModal = this.toggleModal.bind(this);
     this.name = this.props.name;
     this.image = this.props.image;
     this.description = this.props.description;
     this.link = this.props.link;
  }

    toggle() {
      this.setState(
        state => ({
          collapse: !state.collapse
        }));
    }

    toggleModal() {
      this.setState(
        state => ({
          modal: !state.modal
        }));
    }

  render() {
    return (
    <Col>
      <Card className="">
        <Button outline onClick={this.toggleModal}>{this.name}</Button>
        <Modal scrollable size="xl" isOpen={this.state.modal} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>{this.name}</ModalHeader>
          <ModalBody>
            <div>
              <div className="image-box">
                <img src={this.image}/>
              </div>
              <div>
                <p>{this.description}</p>
              </div>
              <div>
                <a href={this.link}>Visit {this.name}</a>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </Card>
    </Col>
    );
  }
}

export default ProjectBox;
