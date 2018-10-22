import React, { Component } from 'react';

import serviceAPI from '../../services/api';
import './index.css';
import { ListItem } from '@material-ui/core';

class movieDetails extends Component {
	componentWillMount() {
		this.setState({
			movieDetail: []
		});
	}
	componentDidMount() {
		serviceAPI
			.getDetailsMovie()
			.then(response => {
				console.log('==== response ====');
				console.log(response.data);
				this.setState({ movieDetail: response.data });
			})
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		return (
			<div className="container">
				<h1 className="Hero">{this.state.movieDetail.title}</h1>
				<ListItem className="detail-item">
					<img
						className="detail-img"
						alt={this.state.movieDetail.title}
						title={this.state.movieDetail.title}
						src="https://ubisafe.org/images/film-vector-flat-2.png"
					/>

					<div className="detail-item_text">
						<h2 className="item-title">
							{this.state.movieDetail.title}
						</h2>
						<h3 className="item-sub">
							<span className="detail-item_text-bolder ">
								Original title:
							</span>
							{this.state.movieDetail.original_title}
						</h3>
						<p>
							<span className="detail-item_text-bolder ">
								Overview:
							</span>
							{this.state.movieDetail.overview}
						</p>
						<p>
							<span className="detail-item_text-bolder ">
								Popularity:
							</span>
							{this.state.movieDetail.popularity}
						</p>

						<p>
							<span className="detail-item_text-bolder ">
								Vote aveage:
							</span>
							{this.state.movieDetail.vote_average}
						</p>
						<p>
							<span className="detail-item_text-bolder ">
								Budget:
							</span>
							{this.state.movieDetail.budget}
						</p>
						<p>
							<span className="detail-item_text-bolder ">
								Revenue:
							</span>
							{this.state.movieDetail.revenue}
						</p>
						<p>
							<span className="detail-item_text-bolder ">
								Tagline:
							</span>
							{this.state.movieDetail.tagline}
						</p>
					</div>
				</ListItem>
			</div>
		);
	}
}

export default movieDetails;
