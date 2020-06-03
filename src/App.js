import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import SortingVisualizer from './components/SortingVisualizer';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			arraySize: 10,
			speed: 1,
			algorithm: 'BUBBLE',
			array: []
		};
	}

	updateArraySize = (arraySize) => {
		this.setState({ arraySize });
	}

	updateSpeed = (speed) => {
		this.setState({ speed });
	}

	updateAlgo = (algorithm) => {
		this.setState({ algorithm });
	}

	updateArray = (array) => {
		this.setState({ array });
	}

	render = () => (
		<div className="container-fluid">
			<Navigation />
			<SortingVisualizer />
		</div>
	);
}

export default App;
