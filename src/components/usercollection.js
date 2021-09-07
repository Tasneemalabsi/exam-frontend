import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import UpdateForm from './updateform'


export class usercollection extends Component {
    render() {
        return (
            <div>
                 {this.props.userData.map((item,index)=>{
                    return (
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={item.chocoImg} />
  <Card.Body>
    <Card.Text>
      {item.chocoName}
    </Card.Text>
    <Button variant="primary" onClick={()=>this.props.deleteItems(item._id)}>Delete</Button>
    <Button variant="primary" onClick={()=>this.props.updateItems(item._id)}>Update</Button>
  </Card.Body>
</Card>
                    )
                }
)}
<UpdateForm selectedItem={this.props.selectedItem} updateItems2={this.props.updateItems2} show={this.props.show} handleShow={this.props.handleShow}/>

            </div>
        )
    }
}

export default usercollection
