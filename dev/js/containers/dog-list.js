import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectDog} from '../actions/index';

class DogList extends Component {
    createListItems() {
        return this.props.dogs.map((dog) => {
            return (
                <div key={dog.id} onClick={()=>this.props.selectDog(dog)}>
                <h3>Breed: {dog.breed}</h3>
                    <div>
                        <h4>Name: {dog.name}</h4>
                    </div>
                <hr/>
                </div>
                
            );
        });
    }

    render() {
        return (
            <ul>
                {this.createListItems()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        dogs: state.dogs
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectDog: selectDog}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(DogList);