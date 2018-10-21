import React, { Component } from 'react';
import List from '@material-ui/core/List';
import { ListItem, Divider } from '@material-ui/core';
import serviceAPI from '../../services/api';
import './index.css';
import { Link } from 'react-router-dom';

class movieList extends Component {
	state = {
		defaultPage: '1',
		mylist: [
			{
				Message: 'nada'
			}
		]
	};
	componentDidMount() {
		serviceAPI
			.getPopularMovie(this.state.defaultPage)
			.then(response => {
				console.log('==== response ====');
				console.log(response.data.results);
				this.setState({ mylist: response.data.results });
			})
			.catch(() => {});
	}

	render() {
		return (
			<div>
				<div className="Appcontainer">
					<List>
						{this.state.mylist.map((value, key) => (
							<div key={key}>
								<Link to="/details">
									<ListItem key={value.length} dense button>
										<img
											className="Avatar"
											alt="Remy Sharp"
											src="https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Venom_poster.jpg/220px-Venom_poster.jpg"
										/>

										<div className="Appcontainer__item">
											<p>{value.overview}</p>
											<p>{value.popularity}</p>
										</div>
									</ListItem>
									<Divider />
								</Link>
							</div>
						))}
					</List>
				</div>
			</div>
		);
	}
}

export default movieList;
