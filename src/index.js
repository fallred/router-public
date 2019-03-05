import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export default class App extends Component {
    constructor() {
        super();
    }
    render(){
        return (
            <Router>
                <div>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/profile" component={Profile}></Route>
                    <Route path="/user" component={User}></Route>
                </div>
            </Router>
        );
    }
}
render(<App></App>, window.root);