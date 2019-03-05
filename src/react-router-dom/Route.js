import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Consumer } from './context';
import pathToRegExp from 'path-to-regexp';
export default class Route extends Component {
    constructor() {
        super();
    }
    render(){
        return (
            <Consumer>
                {state=>{
                    let { path, component:Component, exact=false } = this.props;
                    // pathname是location中的
                    let pathname = state.location.pathname;
                    // 根据path实现一个正则，通过正则匹配
                    let reg = pathToRegExp(path, [], {end: exact});
                    let result = pathname.match(reg);
                    if (result) {
                        return <Component></Component>
                    }
                    // console.log(state);
                    return null;
                }}
            </Consumer>
        );
    }
}