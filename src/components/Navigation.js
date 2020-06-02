import React, { Component } from 'react';
import { Navbar, Form } from 'react-bootstrap';

class Navigation extends Component {
	render() {
		return (
			<Navbar bg="dark" expand="sm" variant='dark'>
				<Navbar.Brand href="/">Sorting visualizer</Navbar.Brand>
			</Navbar>
		);
	}
}

export default Navigation;
