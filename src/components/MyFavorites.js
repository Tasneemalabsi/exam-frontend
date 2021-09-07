import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '././MyFavorites.js';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Usercollection from './usercollection'

class MyFavorites extends React.Component {
 constructor (props){
   super(props);
   this.state={
     userData:[],
     selectedItem:{},
     show:false
   }
 }
 componentDidMount =async () => {
   const user =this.props.auth0
   let userData = await axios.get(`${process.env.REACT_APP_SERVER}/getuserdata?email=${user.user.email}`);
   this.setState({
     userData:userData.data
     
   })
 }

 deleteItems = async (chocoID) => {
  const user =this.props.auth0
  let deletedData = await axios.delete(`${process.env.REACT_APP_SERVER}/deletedata/${chocoID}?email=${user.user.email}`);

  let userData = await axios.get(`${process.env.REACT_APP_SERVER}/getuserdata?email=${user.user.email}`);

  this.setState({
    userData:userData.data
  })

 }

 updateItems = async (chocoID) => {
  const user =this.props.auth0;
  let selectedItem = await this.state.userData.find((item,index)=>(item._id===chocoID));
  console.log(selectedItem);
        this.setState({
            selectedItem:selectedItem,
            show:true
        });
        console.log(this.state.selectedItem);
}

updateItems2 = async (event) => {
  const user =this.props.auth0;

  event.preventDefault();
  let chocoInfo = {
    chocoName:event.target.chocoName.value,
    chocoImg:event.target.chocoImg.value,
    email: user.user.email
}
let chocoID = this.state.selectedItem._id;
let updatedData = await axios.put(`${process.env.REACT_APP_SERVER}/updatedata/${chocoID}`,chocoInfo);
this.setState({
  userData:updatedData.data
})
}

handleShow = () => {
  this.setState({
    show:!this.state.show
  })
}
  render() {
    return(
      <>
        <h1>My Favorites</h1>
        <p>
          This is a collection of my favorites
        </p>
        {this.state.userData.length?<Usercollection userData={this.state.userData} deleteItems={this.deleteItems} updateItems={this.updateItems} selectedItem={this.state.selectedItem} updateItems2={this.updateItems2} show={this.state.show} handleShow={this.handleShow} />:<p>Your List is Empty ¯_(ツ)_/¯</p>}
      </>
    )
  }
}

export default withAuth0(MyFavorites);

