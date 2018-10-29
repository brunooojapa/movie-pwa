import React, { Component } from 'react';
import List from '@material-ui/core/List';
import { ListItem, Divider, Button, MobileStepper } from '@material-ui/core';
import serviceAPI from '../../services/api';
import './index.css';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as listActions from '../../actions/listActions';
import { connect } from 'react-redux';

class movieList extends Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	state = {
		defaultPage: 1,
		mylist: [{}]
	};
	componentWillMount() {
		console.log(this.state.defaultPage);
		this.handleNext();
	}
	componentDidMount() {
		this.props.addList(this.state.mylist);
	}
	getMovieList() {
		serviceAPI
			.getPopularMovie(this.state.defaultPage)
			.then(response => {
				console.log('==== response ====');
				console.log(response.data.results);
				this.props.addList(response.data.results);
				this.setState({ mylist: response.data.results });
			})
			.catch(() => {});
	}

	handleNext = () => {
		console.log(this.state.defaultPage);

		this.setState(state => ({ defaultPage: state.defaultPage + 1 }));
		console.log(this.state.defaultPage);
		this.getMovieList();
	};

	handleBack = () => {
		console.log(this.state.defaultPage);
		this.setState(state => ({ defaultPage: state.defaultPage - 1 }));
		console.log(this.state.defaultPage);
		this.getMovieList();
	};

	render() {
		return (
			<div className="container">
				<h1 className="hero">Most Popular Movie List</h1>
				<div className="list">
					{!this.props.list || this.props.list.length === 0 ? (
						<ListItem className="list-item" dense button>
							<div className="list-item_text">
								<h2 className="item-title">no results found</h2>
							</div>
						</ListItem>
					) : (
						<List>
							{this.props.list.map((value, key) => (
								<div key={key}>
									<Link to="/details">
										<ListItem
											key={value.length}
											className="list-item"
											dense
											button
										>
											<img
												className="list-img"
												alt={value.title}
												title={value.title}
												src="https://ubisafe.org/images/film-vector-flat-2.png"
											/>

											<div className="list-item_text">
												<h2 className="item-title">
													{value.title}
												</h2>
												<h3 className="item-sub">
													<span className="list-item_text-bolder ">
														Original title:
													</span>
													{value.original_title}
												</h3>
												<p>
													<span className="list-item_text-bolder ">
														Overview:
													</span>
													{value.overview}
												</p>
												<p>
													<span className="list-item_text-bolder ">
														Popularity:
													</span>
													{value.popularity}
												</p>
												<p>
													<span className="list-item_text-bolder ">
														Vote aveage:
													</span>
													{value.vote_average}
												</p>
											</div>
										</ListItem>
										<Divider />
									</Link>
								</div>
							))}

							<MobileStepper
								position="static"
								className="pagination"
								steps={0}
								nextButton={
									<Button
										size="small"
										onClick={this.handleNext}
									>
										Next
									</Button>
								}
								backButton={
									<Button
										size="small"
										onClick={this.handleBack}
										disabled={this.state.defaultPage === 1}
									>
										Back
									</Button>
								}
							/>
						</List>
					)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	list: state.list[0]
});

const mapDispachToProps = dispatch => bindActionCreators(listActions, dispatch);

export default connect(
	mapStateToProps,
	mapDispachToProps
)(movieList);
