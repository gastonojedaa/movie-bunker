import { Movie } from './components/Movie'
import { Header } from './components/Header'
import './styles/App.css'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import { Footer } from './components/Footer'
import { useState } from 'react'
import debounce from 'just-debounce-it'
export function App() {
	const { movies, getMovies } = useMovies()

	const [search, setSearch] = useState('')
	const { error } = useSearch({ search })

	const debouncerSearch = debounce((search) => {
		getMovies(search), 500
	})

	const handleChange = (e) => {
		const newSearch = e.target.value.trim()
		if (newSearch.startsWith(' ')) return
		setSearch(newSearch)
		debouncerSearch(newSearch) //se usa el estado actualizado
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		getMovies(search)
	}

	return (
		<div className='absolute w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
			<div className='page'>
				<Header
					getMovies={getMovies}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
				/>
				<main>
					{error && (
						<p className='flex justify-center p-4 text-red-800 rounded-lg  dark:text-red-400 mt-10'>
							{error}
						</p>
					)}
					<Movie movies={movies} />
				</main>
				<Footer />
			</div>
		</div>
	)
}
export default App
