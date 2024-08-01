import { MovieModel } from '../models/movie.js';
import { validateMovie, validateOneThing } from '../schemas/movies.js'


export class MovieController {
    static async getAll(req, res) {
        const { genre } = req.query
        const movies = await MovieModel.getAll({ genre })
        res.json(movies)
    }   

    static async getByTitle(req, res) {
        const { title } = req.params
        const movie = await MovieModel.getByTitle({ title })
        movie ? res.json(movie) : res.status(404).json({ message: 'Movie not found' })
    }

    static async getById(req, res) {
        const { id } = req.params
        const movie = await MovieModel.getById({ id })
        movie ? res.json(movie) : res.status(404).json({ message: 'Movie not found' })
    }

    static async create(req, res) {
        const result = validateMovie(req.body)
        if (result.error) {
            return res.status(400).json({ message: JSON.parse(result.error.message) })
        }
        const newMovie = await MovieModel.create({ newMovie: result.data })

        res.status(201).json(newMovie)
    }

    static async delete(req, res) {
        const { id } = req.params
        const movies = await MovieModel.delete({ id })
        if (!movies) {
            return res.status(404).json({ message: 'Movie not found' })
        }
        res.json(movies)
    }

    static async patch(req, res) {
        const result = validateOneThing(req.body)
        if (result.error) {
            return res.status(400).json({ message: JSON.parse(result.error.message) })
        }

        const { id } = req.params
        const updatedMovie = await MovieModel.patch({ id, data: result.data })

        res.json(updatedMovie)
    }


}