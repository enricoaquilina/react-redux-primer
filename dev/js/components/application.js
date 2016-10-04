import React from 'react';
import DogList from '../containers/dog-list';
import DogDetail from '../containers/dog-detail';

require('../../scss/style.scss');

const Application = () => (
    <div>
        <h2>Dogs List:</h2>
        <DogList />
        <hr/>
        <h2>Dog Details</h2>
        <DogDetail />
    </div>
);

export default Application;