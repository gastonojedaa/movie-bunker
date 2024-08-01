import express, { json } from 'express'
import { Moviesrouter } from './routes/movies.js'
import { corsMiddleware } from './middlewares/cors.js'

const app = express()
app.use(express.json())
app.use(corsMiddleware())
app.disable('x-powered-by')

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' })
})

//get all routes from movies.js
app.use('/movies', Moviesrouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:3000')
})