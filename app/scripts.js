//'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var ReactAnimations = require('react-addons-css-transition-group');

import { hashHistory } from 'react-router';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';

var wrapper = document.querySelector("#app");

var { 
    Router,
    Route,
    IndexRoute,
    IndexLink,
    Link 
} = ReactRouter;



var App = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Simple SPA</h1>
                <ul className="header">
                    <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                    <li><Link to="/about" activeClassName="active">About</Link></li>
                    <li><Link to="/contact" activeClassName="active">Contact</Link></li>
                </ul>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

// Contact was ere

// About was ere

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="about" component={About} />
            <Route path="contact" component={Contact} />
        </Route>
    </Router>,
    wrapper
);
