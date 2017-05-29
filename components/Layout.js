import React from 'react';

import {
    IndexLink,
    Link
} from 'react-router';

import {
    ButtonToolbar,
    Button,
    Jumbotron
} from 'react-bootstrap';


export default class Layout extends React.Component {

//var Layout = React.createClass({
    render() {
        return (
        <div className="main">
            <h1>C@findrrr</h1>
            <ButtonToolbar>
                <IndexLink to="/" activeClassName="active"><Button>Find Cats!</Button></IndexLink>
                <Link to="/stuff" activeClassName="active"><Button>Submit A Cat!</Button></Link>
                <Link to="/contact" activeClassName="active"><Button>Contact us!</Button></Link>
            </ButtonToolbar>
            <div className="content">
				<Jumbotron>
					{this.props.children}
				</Jumbotron>
            </div>
        </div>
		)
    }
}