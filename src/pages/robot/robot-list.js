import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardListRobot from './cardListRobot';
import SearchBox from '../../components/searchBox';
import Scroll from '../../components/scroll';
import ErrorBoundary from '../../components/errorBoundary';

import { setSearchField, requestRobots } from '../../redux/robot/robot.action';

class RobotList extends Component {
    //remove after create state with redux
    // constructor() {
    //     super();
    //     this.state = {
    //         robots: []
    //         //searchField: ''
    //     }
    // }
 
    componentDidMount() {
        this.props.onRequestRobots();
        //remove after declare the request robot with redux
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => this.setState({ robots: users }));
    }

    //remove this method after declaring it as props from redux
    // onSearchChange = (event) => {
    //     this.setState({ searchField: event.target.value });
    // }

    render() {
        const { searchField, onSearchChange, robots, isLoading } =  this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
 
        return isLoading ?
            <h1>Loading...</h1> :
            (
                <div>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>                           
                                <CardListRobot robots={filteredRobots} />                           
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}

//mapping the states from reducers
const mapStateToProps = state => {
    return  {
        searchField: state.searchRobots.searchField,
        isLoading: state.requestRobots.isLoading,
        robots: state.requestRobots.robots,
        error: state.requestRobots.error
    }
}

//mapping the functions from actions
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        //the dispatch need the requestRobots to return a function 
        onRequestRobots: () => dispatch(requestRobots())
    }
}

//The connect component from react-redux package
//it is a 'higher order function', means a function that return function
export default connect(mapStateToProps, mapDispatchToProps)(RobotList); 
//mapDispatchToProps = mapActionToProps