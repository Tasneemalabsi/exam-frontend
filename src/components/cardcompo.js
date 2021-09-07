import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export class cardcompo extends Component {
    render() {
        return (
            <div>
                {this.props.chocolateData.map((item,index)=>{
                    return (
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={item.chocoImg} />
  <Card.Body>
    <Card.Text>
      {item.chocoName}
    </Card.Text>
    <Button variant="primary" onClick={()=>{this.props.addItems(index)}}>Add-to-favorite</Button>
  </Card.Body>
</Card>
                    )
                }
)}
            </div>
        )
    }
}

export default cardcompo
