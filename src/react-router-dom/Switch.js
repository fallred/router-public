// switch的作用就是匹配一个组件返回。
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Consumer } from './context';
import pathToRegExp from 'path-to-regexp';
export default class Redirect extends Component {
    constructor(){
        super();
    }
    render(){
        return <Consumer>
            {
                state=>{
                    let pathname = state.location.pathname;
                    let children = this.props.children;
                    for(var i=0;i<children.length;i++){
                        let child = children[i];
                        // redirect可能没有path属性
                        let path = child.props.path || '';
                        let reg = pathToRegExp(path, [], {end:false});
                        // switch匹配成功了
                        if (reg.test(pathname)) {
                            // 把匹配到的组件返回即可
                            return child;
                        }
                    }
                    return null;
                }
            }
        </Consumer>
    }
}