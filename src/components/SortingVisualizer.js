import React, { Component } from 'react';
import SortingAlgos from '../Algorithms/SortingAlgos';
import '../styles/CustomStyles.css';
import RangeSlider from 'react-bootstrap-range-slider';

class SortingVisualizer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			array: [],
			obj: new SortingAlgos(),
			speed: 2
		};
	}

	componentDidMount() {
		this.resetArray(false);
	}

	resetArray(reload) {
		if (reload) window.location.reload();
		const array = [];

		for (let i = 0; i < 100; i++) {
			array.push(getRandomInRange(5, 350));
		}
		this.setState({ array });
	}

	render() {
		const { array, obj, speed } = this.state;

		return (
			<div className="container">
				<div
					className="d-flex flex-row justify-content-center align-items-end col-auto"
					style={{ height: '400px', width: '1200px' }}
				>
					{array.map((item, index) => (
						<div
							className="array-bar"
							style={{
								height: `${item}px`,
								width: '10px',
								margin: '0 1px',
								backgroundColor: `#303846`
							}}
							key={index}
						/>
					))}
				</div>
				<div
					className="row justify-content-center"
					style={{ margin: '10px' }}
				>
					<button
						className="btn btn-dark sort-button"
						onClick={() =>
							obj.bubbleSort(
								array,
								document.getElementsByClassName('array-bar'),
								speed
							)}
					>
						Bubble sort
					</button>

					<button
						className="btn btn-dark sort-button"
						onClick={() =>
							obj.mergeSort(
								array,
								document.getElementsByClassName('array-bar'),
								speed * speed * 5
							)}
					>
						Merge sort
					</button>

					<button
						className="btn btn-danger sort-button"
						onClick={() => this.resetArray(true)}
					>
						Reset Array
					</button>
				</div>
				<div className="col d-flex justify-content-center">
					<p>Slow motion control</p>
				</div>
				<div className="col d-flex justify-content-center">
					<RangeSlider
						min={1}
						max={5}
						value={speed}
						onChange={(changeEvent) =>
							this.setState({ speed: changeEvent.target.value })}
					/>
				</div>
			</div>
		);
	}
}

function getRandomInRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer;
