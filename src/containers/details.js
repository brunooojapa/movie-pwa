import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Search/index';
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
