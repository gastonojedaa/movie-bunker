import { useEffect, useRef, useState } from 'react'
import { fetchMovies } from '../services/movie'

export function useMovies() {
	const [movies, setMovies] = useState('')
	const isAlreadySearched = useRef(false)

	const getMovies = async (search) => {
		if (search == isAlreadySearched.current) return

		try {
			isAlreadySearched.current = search
			const newSearch = await fetchMovies(search)			
			setMovies(newSearch)
		} catch (e) {
			throw new Error('Error fetching movies')
		}
	}

	useEffect(() => {
		getMovies()
	}, [])


	return { movies, getMovies }
}
