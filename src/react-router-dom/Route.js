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
                    let keys = [];
                    let reg = pathToRegExp(path, keys, {end: exact});
                    keys = keys.map(item=>item.name);//[id]
                    let result = pathname.match(reg);
                    let [url, ...values] = result || [];//[1]
                    let props = {
                        location: state.location,
                        history: state.history,
                        match: {
                            params: keys.reduce((obj, current, index) => {
                                obj[current] = values[index];
                                return obj;
                            }, {})
                        }
                    };
                    if (result) {
                        return <Component {...props}></Component>
                    }
                    // console.log(state);
                    return null;
                }}
            </Consumer>
        );
    }
}