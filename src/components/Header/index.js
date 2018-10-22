import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './index.css';
import SearchBar from '../Search';

class searchBar extends Component {
	render() {
		return (
			<div className="hero-header">
				<AppBar position="static" color="default" className="header">
					<Toolbar>
						<Link to="/">
							<Typography
								variant="h1"
								color="inherit"
								noWrap
								className="header-brand"
							>
								Movie List
							</Typography>
						</Link>
						<SearchBar />
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default searchBar;
