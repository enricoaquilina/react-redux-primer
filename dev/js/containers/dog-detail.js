import React, {Component} from 'react';
import {connect} from 'react-redux';

class DogDetail extends Component {

    render() {
        if(!this.props.dog) {
            return (<h4>Select a dog...</h4>)
        }
        return (
            <div>
                <img src={this.props.dog.thumbnail} width="150"/>
                <h2>Breed: {this.props.dog.breed}</h2>
                <p>Name: {this.props.dog.breed}</p>
                <p>Age: {this.props.dog.age}</p>
                <p>Description: {this.props.dog.description}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        dog: state.activeDog
    };
}

export default connect(mapStateToProps)(DogDetail);