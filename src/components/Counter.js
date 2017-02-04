import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
    render() {
        return (
            <h1>VALUE: { this.props.value }</h1>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        value: state.counter.value
    };
}

// connet -> react-redux의 내장 API, 
// React Component를 Redux Store에 연결해줌
Counter = connect(mapStateToProps)(Counter);

export default Counter;


