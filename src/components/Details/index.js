import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import serviceAPI from '../../services/api';
import './index.css';

class movieDetails extends Component {
	componentWillMount() {
		this.setState({
			movieDetail: []
		});
	}
	componentDidMount() {
		serviceAPI
			.getDetailsMovie('')
			.then(response => {
				console.log('==== response ====');
				console.log(response.data);
				this.setState({ movieDetail: response.data });
			})
			.catch(error => {});
	}

	render() {
		return (
			<Card className={'card'}>
				<CardMedia
					className={'cover'}
					image="https://images.unsplash.com/photo-1530075288903-69b220251c3e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=032bc1890fe094136025465c66302731&auto=format&fit=crop&w=300&q=60"
					title={this.state.movieDetail.title}
				/>
				<div className={'details'}>
					<CardContent className={'content'}>
						<Typography component="h5" variant="h5">
							{this.state.movieDetail.title}
						</Typography>
						<Typography component="p">
							{this.state.movieDetail.original_title}
						</Typography>
						<Typography component="p">
							{this.state.movieDetail.release_date}
						</Typography>
						<Typography variant="subtitle1" color="textSecondary">
							{this.state.movieDetail.overview}
						</Typography>
					</CardContent>
				</div>
			</Card>
		);
	}
}

export default movieDetails;
