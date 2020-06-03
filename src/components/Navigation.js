import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class Navigation extends Component {
	render() {
		return (
			<Navbar bg="dark" expand="sm" variant='dark' className='myNav'>
				<Navbar.Brand className='navBrand' href="/">Sorting visualizer</Navbar.Brand>
			</Navbar>
		);
	}
}

export default Navigation;
