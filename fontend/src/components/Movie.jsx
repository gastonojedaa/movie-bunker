import '../styles/Movie.css'

export function responseMovies({ movies }) {		
	return (
		<div>
			<ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10'>
				{movies.map((movie) => (
					<li key={movie.title} className='movie relative group rounded-xl'>
						<h2>{movie.title}</h2>
						<img src={movie.poster} alt={movie.title} />
						<p>{movie.year}</p>
						<div className='absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl'>
							<a
								href={`https://www.youtube.com/results?search_query=${movie.title.replace(
									/\s/g,
									'+'
								)}+trailer`}
								target='_blank'
								rel='noopener noreferrer'
							>
								<button className='px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition'>
									Watch Trailer
								</button>
							</a>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
export function Movie({ movies }) {
	console.log(movies)
	const hasMovies = movies.length > 0
	return (
		<div className='flex-grow' style={{minHeight:"100dvh"}}>
			{hasMovies ? (
				responseMovies({ movies })
			) : (
				<p className='text-center mt-10'>No movies founded</p>
			)}
		</div>
	)
}
