import { Router } from 'express';
import { MovieController } from '../controller/movies.js';

export const Moviesrouter = Router()

Moviesrouter.get('/', MovieController.getAll)

Moviesrouter.get('/title/:title', MovieController.getByTitle)

Moviesrouter.get('/:id', MovieController.getById)

Moviesrouter.post('/', MovieController.create)

Moviesrouter.delete('/:id', MovieController.delete)

Moviesrouter.patch('/:id', MovieController.patch)
