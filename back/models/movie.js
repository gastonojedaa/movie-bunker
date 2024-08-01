import moviesJson from '../movies.json' with {type: 'json' }
import { randomUUID } from 'node:crypto'

export class MovieModel {
    static async getAll({ genre }) {
        if (genre) {
            return moviesJson.filter(movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase()))
        }
        return moviesJson
    }

    static async getByTitle({ title }) {
        return moviesJson.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
    }    

    static async getById({ id }) {
        return moviesJson.find(movie => movie.id === id)
    }

    static async create({ newMovie }) {
        const movie = {
            id: randomUUID(),
            ...newMovie
        }
        moviesJson.push(movie)

        return movie
    }

    static async delete({ id }) {
        const movieIndex = moviesJson.findIndex(movie => movie.id === id)
        if (movieIndex >= 0) {
            moviesJson.splice(movieIndex, 1)
            return moviesJson
        }
        return false
    }

    static async patch({ id, data }) {
        const movieIndex = moviesJson.findIndex(movie => movie.id === id)

        if (movieIndex === -1) {
            return null
        }
        const updatedMovie = {
            ...moviesJson[movieIndex],
            ...data
        }
        moviesJson[movieIndex] = updatedMovie
        return updatedMovie
    }
}
