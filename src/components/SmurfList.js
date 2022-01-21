import React from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';

const SmurfList = (props) => {
    const { loading, smurfs } = props;

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className='listContainer'>
            {smurfs.map((item, index) => {
                return (
                    <Smurf smurf={item} key={index} />
                );
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        loading: state.loading
    };
};

export default connect(mapStateToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.
