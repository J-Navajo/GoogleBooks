import React, {Component} from "react";
import Jumbtron from "../Components/jumbotron"
import Cards from "../Components/Card"
import {  Container } from 'reactstrap';
import Results from "../Components/results"
// import CardHolder from "../Components/cardholder"

class Home extends Component{
    render() {
        return(
            <Container>
                
                <Jumbtron />
                <Cards />
                <Results />

            </Container>
        )
    }
}
export default Home