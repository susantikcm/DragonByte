import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate(nextProps, nextSate) {
        //console.log(nextProps, nextSate)
        if(this.state.count !== nextSate.count) {
            return true
        }
        return false;
    }

    updateCount = () => {
        this.setState(state => { 
            //funny side effect when updating state based on current state
            //state update is not synchronous and update might not happen properly
            //so its better to grab the current state to a new variable before use
            return { count: state.count + 1 }
        })
    }

    render(){
        console.log('Counter Button');
        return (
            <button color={this.props.color} onClick={this.updateCount}>Count: {this.state.count}</button>
        );
    }
}

export default Counter;