import React, { Component } from 'react';
import List from '@material-ui/core/List';
import { ListItem, Avatar, ListItemText, Divider } from '@material-ui/core';
import serviceAPI from '../../services/api';
import './index.css';
import { Link } from 'react-router-dom';

class movieList extends Component {
	componentWillMount() {
		this.setState({
			mylist: [
				{
					title: 'filme',
					overview:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sunt eos non eaque tempora incidunt repellendus, alias animi ad hic assumenda error possimus natus rerum dignissimos maxime. Quas rerum odit officiis ipsam, quia esse molestias vel, explicabo nulla consequatur aperiam.',
					id: 422200
				},
				{
					title: 'filme',
					overview:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sunt eos non eaque tempora incidunt repellendus, alias animi ad hic assumenda error possimus natus rerum dignissimos maxime. Quas rerum odit officiis ipsam, quia esse molestias vel, explicabo nulla consequatur aperiam.',
					id: 422200
				},
				{
					title: 'filme',
					overview:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sunt eos non eaque tempora incidunt repellendus, alias animi ad hic assumenda error possimus natus rerum dignissimos maxime. Quas rerum odit officiis ipsam, quia esse molestias vel, explicabo nulla consequatur aperiam.',
					id: 422200
				},
				{
					title: 'filme',
					overview:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sunt eos non eaque tempora incidunt repellendus, alias animi ad hic assumenda error possimus natus rerum dignissimos maxime. Quas rerum odit officiis ipsam, quia esse molestias vel, explicabo nulla consequatur aperiam.',
					id: 422200
				},
				{
					title: 'filme',
					overview:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sunt eos non eaque tempora incidunt repellendus, alias animi ad hic assumenda error possimus natus rerum dignissimos maxime. Quas rerum odit officiis ipsam, quia esse molestias vel, explicabo nulla consequatur aperiam.',
					id: 422200
				},
				{
					title: 'filme',
					overview:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sunt eos non eaque tempora incidunt repellendus, alias animi ad hic assumenda error possimus natus rerum dignissimos maxime. Quas rerum odit officiis ipsam, quia esse molestias vel, explicabo nulla consequatur aperiam.',
					id: 422200
				},
				{
					title: 'filme',
					overview:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, odit?',
					id: 402990
				},
				{
					title: 'venom',
					overview:
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic repellat maxime architecto aliquam quis suscipit quas, voluptates est distinctio nostrum?',
					id: 100
				},
				{
					title: 'venom',
					overview:
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic repellat maxime architecto aliquam quis suscipit quas, voluptates est distinctio nostrum?',
					id: 100
				},
				{
					title: 'venom',
					overview:
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic repellat maxime architecto aliquam quis suscipit quas, voluptates est distinctio nostrum?',
					id: 100
				},
				{
					title: 'venom',
					overview:
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic repellat maxime architecto aliquam quis suscipit quas, voluptates est distinctio nostrum?',
					id: 100
				},
				{
					title: 'venom',
					overview:
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic repellat maxime architecto aliquam quis suscipit quas, voluptates est distinctio nostrum?',
					id: 100
				},
				{
					title: 'venom',
					overview:
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic repellat maxime architecto aliquam quis suscipit quas, voluptates est distinctio nostrum?',
					id: 100
				}
			]
		});
	}
	componentDidMount() {
		serviceAPI
			.getPopularMovie(1)
			.then(response => {
				console.log('==== response ====');
				console.log(response.data.results);
				this.setState({ mylist: response.data.results });
			})
			.catch(error => {});
	}

	render() {
		return (
			<div>
				<div className="Appcontainer">
					<List>
						{this.state.mylist.map(value => (
							<div>
								<Link to="/details">
									<ListItem key={value.length} dense button>
										<Avatar
											alt="Remy Sharp"
											src="/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg"
										/>
										<ListItemText
											className="Appcontainer__item"
											primary={value.title}
											secondary={value.overview}
										/>
										<p>{value.popularity}</p>
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
