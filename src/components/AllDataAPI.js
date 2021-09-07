import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Cardcompo from './cardcompo';


class AllDataAPI extends Component {
    constructor (props) {
        super (props);
            this.state={
                chocolateData:[],
                selectedItem:{},
                addedChocolate:[]
            }
        
    }

    componentDidMount = async() => {
        let chocolateData = await axios.get(`${process.env.REACT_APP_SERVER}/getapidata`);
        this.setState({
            chocolateData:chocolateData.data
        });

    }

    addItems = async(idx) => {
        const user = this.props.auth0
        let selectedItem = await this.state.chocolateData.find((item,index)=>(index===idx))
        this.setState({
            selectedItem:selectedItem
        });
        console.log(this.state.selectedItem);

        let chocoInfo = {
            chocoName:this.state.selectedItem.chocoName,
            chocoImg:this.state.selectedItem.chocoImg,
            email: user.user.email
        }
     let addedChocolate= await axios.post(`${process.env.REACT_APP_SERVER}/adddata`,chocoInfo);
     this.setState ({
         addedChocolate:addedChocolate.data
     })
        
    }

    render() {

        
        return (
            <div>
                <h1>All Data from the API</h1>
                <h3>Select your favorites :)</h3>
                <Cardcompo chocolateData={this.state.chocolateData} addItems={this.addItems}/>
            </div>
        )
    }
}

export default withAuth0(AllDataAPI);
