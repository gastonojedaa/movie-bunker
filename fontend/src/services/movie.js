//const API_KEY = '4287ad07'
export const fetchMovies = async (search) => {
	console.log(search)
	const url = search
		? `http://localhost:3000/movies/title/${search}`
		: 'http://localhost:3000/movies'
	const response = await fetch(url)
	const json = await response.json()
	return json || []
}
