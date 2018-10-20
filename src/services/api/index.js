import axios from 'axios';

const API = 'a0c7353e57057d94826c978d6fe6c244';
const serviceAPI = {
	getPopularMovie(page) {
		return axios.get(
			`https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US&page=${page}`
		);
	},

	getDetailsMovie(id) {
		return axios.get(
			`https://api.themoviedb.org/3/movie/335983?api_key=${API}&language=en-US`
		);
	}
};

export default serviceAPI;
