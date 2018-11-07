import { get } from 'axios';

const API = {
	key: 'a0c7353e57057d94826c978d6fe6c244',
	url: 'https://api.themoviedb.org/3',
	language: 'en-US'
};
const serviceAPI = {
	getPopularMovie(page) {
		return get(
			`${API.url}/movie/popular?api_key=${API.key}&language=${
				API.language
			}&page=${page}`
		);
	},

	//temporary id
	getDetailsMovie(id) {
		return get(
			`${API.url}/movie/${id}?api_key=${API.key}&language=${API.language}`
		);
	},

	getSearchMovies(name) {
		return get(
			`${API.url}/search/movie?api_key=${API.key}&language=${
				API.language
			}&query=${name}&page=1&include_adult=false`
		);
	}
};

export default serviceAPI;
