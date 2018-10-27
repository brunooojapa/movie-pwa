import React, { Component } from 'react';
import { LinearProgress, Button, Snackbar } from '@material-ui/core';
import './index.css';
import serviceAPI from '../../services/api';

class SearchBar extends Component {
	state = {
		loading: false
	};
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		this.setState({ loading: true });

		e.preventDefault();

		serviceAPI
			.getSearchMovies(this.refs.username.value)
			.then(response => {
				console.log('==== response ====');
				console.log(response.data);
				if (response.status === 200) {
					console.log('==== response 200====');
					this.setState({
						loading: false,
						show: false,
						result: response.data
					});
				}
				if (response.status === 401) {
					console.log('==== response  401====');
					this.setState({
						result: response.data,
						loading: false,
						show: true,
						message: 'Sorry, Houston, we have a problem.'
					});
				}
				if (response.status === 422) {
					console.log('==== response 422 ====');
					this.setState({
						loading: false,
						show: true,
						message: 'Ops, empy field '
					});
				}
				if (response.status === 404) {
					console.log('==== response 404 ====');
					this.setState({
						message: 'Sorry! Try again.',
						loading: false,
						show: true
					});
				}
			})
			.catch(error => {
				console.log('==== response  error====');
				console.log(error);
				this.setState({
					message: 'Sorry! Try again.',
					loading: false,
					show: true
				});
				// set modal hide
				setTimeout(() => {
					this.setState({ show: false });
				}, 2000);
			});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div className="search-group">
						<input
							type="text"
							ref="username"
							className="search-input"
							placeholder="Harry Potter"
						/>
						<Button
							type="submit"
							color="primary"
							variant="contained"
							className="search-button"
						>
							<i>search</i>
						</Button>
					</div>
					<Snackbar
						open={this.state.show}
						ContentProps={{ 'aria-describedby': 'message-id' }}
						message={
							<span id="message-id">{this.state.message}</span>
						}
					/>
					{this.state.loading ? <LinearProgress /> : null}
				</form>
			</div>
		);
	}
}

export default SearchBar;
