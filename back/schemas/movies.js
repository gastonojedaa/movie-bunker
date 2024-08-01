import z from 'zod'

const movieSchema = z.object({
    title: z.string({
        invalid_type_error: 'Title should be a string',
        required_error: 'Title is required'
    }),
    year: z.number().int().min(1900).max(new Date().getFullYear()),
    director: z.string(),
    duration: z.number().int().positive(),
    poster: z.string().url({
        message: 'Poster should be a valid URL'
    }),
    genre: z.array(z.enum(['Action', 'Adventure', 'Crime', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Thriller', 'Sci-Fi']),
        { message: 'Genre should be one of the following: Action, Adventure, Comedy, Drama, Fantasy, Horror, Thriller, Sci-Fi' }),
    rate: z.number().min(0).max(10).default(6)
})

export function validateMovie(object) {
    return movieSchema.safeParse(object)
}

export function validateOneThing(object) {
    return movieSchema.partial().safeParse(object)
}
