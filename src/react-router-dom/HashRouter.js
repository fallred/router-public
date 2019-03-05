import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './context';
export default class App extends Component {
    constructor() {
        super();
    }
    render(){
        return (
            <Provider value={{a:1}}>
                {this.props.children}
            </Provider>
        );
    }
}