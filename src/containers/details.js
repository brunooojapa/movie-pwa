import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Header/index';
import List from '../components/Details/index';
class detailsContainer extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<main>
					<List />
				</main>
			</div>
		);
	}
}

export default detailsContainer;
