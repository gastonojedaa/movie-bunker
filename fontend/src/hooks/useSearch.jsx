import { useEffect, useState } from 'react'

export function useSearch({search}) {
	const [error, setError] = useState(null)	

	useEffect(() => {
		if (!search) {
			setError(null)
			return
		}
		if (search.length < 3) {
            setError('The movie name must be at least 3 characters long.')
            return
		}
        if(search.length > 20){
            setError('The movie name must be less than 20 characters long.')
            return
        }
        if (search.match(/[^a-zA-Z0-9 ]/)) {
            setError('The movie name must contain only letters and numbers.')
            return
        }
        setError(null)

	}, [search])

	return { search, error}
}
