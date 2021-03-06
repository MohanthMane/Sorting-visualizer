import React, { Component } from 'react';
import { mergeSort } from '../Algorithms/MergeSort';
import { bubbleSort } from '../Algorithms/BubbleSort';
import { insertionSort } from '../Algorithms/InsertionSort';
import { selectionSort } from '../Algorithms/SelectionSort';
import '../styles/CustomStyles.css';

class SortingVisualizer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			array: [],
			speed: 1,
			speedToSec: [ 10, 25, 50, 100, 250, 500, 750, 1000, 2000, 3500 ],
			arraySize: 10,
			levels: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
			algorithm: 'BUBBLE',
			timeTaken: null
		};
	}

	componentDidMount() {
		const array = this.generateArray(this.state.arraySize);
		this.setState({ array });
	}

	handleArraySize = (event) => {
		event.preventDefault();
		const size = event.target.value;
		this.setState({ arraySize: size });
		// console.log(size)
		if (size >= 10 && size <= 50) {
			const array = this.generateArray(size);
			this.setState({ array });
		}
	};

	generateArray = (size) => {
		const array = [];
		for (let i = 0; i < size; i++) {
			array.push(getRandomInRange(5, 100));
		}
		return array;
	};

	handleSpeed = (event) => {
		event.preventDefault();

		const speed = event.target.value;
		this.setState({ speed });
	};

	handleAlgo = (event) => {
		event.preventDefault();

		const algorithm = event.target.value.toUpperCase();
		this.setState({ algorithm });
	};

	sortArray = async (e) => {
		e.preventDefault();

		const { algorithm, array, speed, speedToSec } = this.state;
		const arrayBars = document.getElementsByClassName('array-bar');

		var start = new Date().getTime();
		if (algorithm === 'BUBBLE') {
			await bubbleSort(array, arrayBars, speedToSec[speed - 1]);
		} else if (algorithm === 'MERGE') {
			await mergeSort(array, arrayBars, speedToSec[speed - 1]);
		} else if (algorithm === 'INSERTION') {
			await insertionSort(array, arrayBars, speedToSec[speed - 1]);
		} else if (algorithm === 'SELECTION') {
			await selectionSort(array, arrayBars, speedToSec[speed - 1]);
		}
		var timeTaken = new Date().getTime() - start;
		this.setState({ timeTaken });
	};

	render() {
		const { array } = this.state;

		return (
			<div className="row">
				<div className="col-md-4 col-sm">
					<div style={{ background: '#61DBFB', height: '100%' }}>
						<h2 className="form-component">Options</h2>
						<form>
							<div className="form-group form-component">
								<label htmlFor="arraySize">
									Array size(10-50): {this.state.arraySize}
								</label>
								<input
									type="number"
									min={10}
									max={50}
									className="form-control"
									id="arraySize"
									value={this.state.arraySize}
									onChange={(e) => this.handleArraySize(e)}
								/>
							</div>
							<div className="form-group form-component">
								<label htmlFor="speed">
									Slow motion level : {this.state.speed}
								</label>
								<select
									className="form-control"
									id="speed"
									onChange={(e) => this.handleSpeed(e)}
								>
									{this.state.levels.map((item) => (
										<option>{item}</option>
									))}
								</select>
							</div>
							<div className="form-group form-component">
								<label htmlFor="algo">
									Algorithm : {this.state.algorithm + ' SORT'}
								</label>
								<select
									className="form-control"
									id="algo"
									onChange={(e) => this.handleAlgo(e)}
								>
									<option value="bubble">Bubble sort</option>
									<option value="merge">Merge Sort</option>
									<option value="insertion">
										Insertion Sort
									</option>
									<option value="selection">
										Selection Sort
									</option>
								</select>
							</div>
							<div className="form-group form-button">
								<button
									className="btn btn-success form-control"
									onClick={(e) => {
										this.sortArray(e);
									}}
								>
									Sort array
								</button>
							</div>
							<div className="form-group form-button">
								<button
									className="btn btn-danger form-control"
									onClick={(e) => {
										e.preventDefault();
										this.setState({
											array: this.generateArray(
												this.state.arraySize
											)
										});
									}}
								>
									Reset array
								</button>
							</div>
							{this.state.timeTaken && (
								<div className="form-group form-component">
									<p>
										Time taken:{' '}
										{this.state.timeTaken / 1000}sec
									</p>
								</div>
							)}
						</form>
					</div>
				</div>
				<div className="col-md-8 col-sm">
					<div
						className="d-flex flex-row justify-content-center align-items-start col-auto"
						style={{
							height: '100%',
							width: '1200px',
							margin: '10px'
						}}
					>
						{array.map((item, index) => (
							<div
								className="array-bar"
								style={{
									display: 'inline-block',
									height: `${item * 5}px`,
									width: '50px',
									margin: '0 1px',
									backgroundColor: `#303846`
								}}
								key={index}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}
}

function getRandomInRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer;
