import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './index.css';
import SearchBar from '../Search';

class searchBar extends Component {
	render() {
		return (
			<div className="App">
				<header>
					<AppBar position="static" color="default">
						<Toolbar>
							<Link to="/">
								<Typography variant="h6" color="inherit" noWrap>
									Movie
								</Typography>
							</Link>
							<SearchBar />
						</Toolbar>
					</AppBar>
				</header>
			</div>
		);
	}
}

export default searchBar;
