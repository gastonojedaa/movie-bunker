import cinema from '../assets/cinema.png'
export function Header({ handleChange, handleSubmit }) {
	return (
		<div className='flex items-center mt-10 space-y-6'>
			<div className='flex items-center space-x-3 mr-3'>
				<img src={cinema} alt='logo' className='w-16 h-16' />
				<h1 className='text-white text-5xl font-bold tracking-wide text-center'>
					Movie Bunker
				</h1>
			</div>
			<form
				className='flex items-center space-x-4 w-full max-w-2xl'
				type='submit'
				onSubmit={handleSubmit}
			>
				<input
					type='text'
					className='p-2 w-full max-w-lg rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-neutral-800 text-white'
					placeholder='Search for a movie...'
					onChange={handleChange}
				/>
				<button
					type='submit'
					className='px-4 py-2 bg-indigo-700 text-white rounded-md hover:bg-indigo-600 transition'
				>
					Search
				</button>
			</form>
		</div>
	)
}
