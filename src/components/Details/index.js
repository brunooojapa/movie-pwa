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
					image="https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Venom_poster.jpg/220px-Venom_poster.jpg"
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
