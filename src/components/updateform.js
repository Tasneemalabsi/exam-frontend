import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export class updateform extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>update data</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form onSubmit={this.props.updateItems2}>
                    <input type='text' name='chocoName' defaultValue={this.props.selectedItem.chocoName}/>
                    <input type='text' name='chocoImg' defaultValue={this.props.selectedItem.chocoImg}/>
                    <Button type='submit'>Submit</Button>
                </Form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleShow}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
                
            </div>
        )
    }
}

export default updateform
