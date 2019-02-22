import React, { Component } from 'react';

import serviceAPI from '../../services/api';
import './index.css';
import { ListItem } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import * as listActions from '../../actions/listActions';
import { connect } from 'react-redux';

class movieDetails extends Component {
    constructor(props) {
        super(props);
        console.log('teste');
        console.log(props);
    }
    state = {
        defaultPage: 1,
        movieDetail: []
    };
    componentWillMount() {
        this.props.addList(this.state.movieDetail);
        // this.setState({ movieDetail: this.props.itemDetail[0] }); second options , faster but with fewer items
        console.log(this.props.itemDetail[0]);
    }

    componentDidMount() {
        this.getDetails();
    }

    getDetails = () => {
        serviceAPI
            .getDetailsMovie(this.props.itemDetail[0].id)
            .then(response => {
                console.log('==== response ====');
                console.log(response.data);
                this.setState({ movieDetail: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return (
            <div className="container">
                <h1 className="Hero">{this.state.movieDetail.title}</h1>
                <ListItem className="detail-item">
                    <img
                        className="detail-img"
                        alt={this.state.movieDetail.title}
                        title={this.state.movieDetail.title}
                        src={
                            !this.state.movieDetail.poster_path
                                ? 'https://ubisafe.org/images/film-vector-flat-2.png'
                                : `https://image.tmdb.org/t/p/w500/${
                                      this.state.movieDetail.poster_path
                                  }`
                        }
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
                        <p className="justify-text">
                            <span className="detail-item_text-bolder">
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
                        {!this.state.movieDetail.budget ? null : (
                            <p>
                                <span className="detail-item_text-bolder ">
                                    Budget:
                                </span>
                                {this.state.movieDetail.budget}
                            </p>
                        )}
                        {!this.state.movieDetail.revenue ? null : (
                            <p>
                                <span className="detail-item_text-bolder ">
                                    Revenue:
                                </span>
                                {this.state.movieDetail.revenue}
                            </p>
                        )}
                        {!this.state.movieDetail.tagline ? null : (
                            <p>
                                <span className="detail-item_text-bolder ">
                                    Tagline:
                                </span>
                                {this.state.movieDetail.tagline}
                            </p>
                        )}
                    </div>
                </ListItem>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    itemDetail: state.itemDetails
});

const mapDispachToProps = dispatch => bindActionCreators(listActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispachToProps
)(movieDetails);
