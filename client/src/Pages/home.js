import React, {Component} from "react";
import Jumbtron from "../Components/jumbotron"
import Cards from "../Components/Card"
import {  Container } from 'reactstrap';
import Results from "../Components/results"
// import CardHolder from "../Components/cardholder"

class Home extends Component{
    state={
        apiResults: [], 
        keyword: ""
        // keyword is what the user types in. when the user stops typing the value is stored in name below

    }

    handleInputChange=(event) => {
        const {name, value} = event.target
        // event.target is a value
        // we will destruct the properties of event.target
        this.setState({  //keyword:"phil"
            [name]: value //name:"phil"
        })
    }
    render() {
        return(
            <Container>
                
                <Jumbtron />
                <Cards keyword={this.state.keyword} handleInputChange={this.handleInputChange} />
                <Results />

            </Container>
        )
    }
}
export default Home