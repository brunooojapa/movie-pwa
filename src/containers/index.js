import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Search/index';
import List from '../components/List/index';
class indexContainer extends Component {
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

export default indexContainer;
