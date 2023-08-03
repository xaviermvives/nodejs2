/* eslint-disable indent */
const express = require('express')
const ditto = require('./pokemon/ditto.json')

const PORT = process.env.PORT ?? 3005

const app = express()
app.disable('x-powered-by')

app.use((req, res, next) => {
    if (req.method !== 'POST') return next()
    if (req.headers['content-type'] !== 'application/json') return next()

    // solo llegan request que son POST y que tienen el header Content-Type: application/json
    let body = ''

    // escuchar evento data
    req.on('data', chunk => {
        body += chunk.toString()
    })

    // cuando termine
    req.on('end', () => {
        const data = JSON.parse(body)
        // llamar a una base de datos par guardar la info
        data.timestamp = Date.now()
        // mutar la reqquest y meter la información en el req.body
        req.body = data
        next()
    })
})

app.get('/pokemon/ditto', (req, res) => {
    // res.status(200).send('<h1>Mi página</h1>')
    // eslint-disable-next-line indent
    // res.json({ message: 'Hola mundo' })
    res.json(ditto)
})

app.post('/pokemon', (req, res) => {
    // req.body deberíamos guardar en bbdd
    res.status(201).json(req.body)
})

// la última a la que va a pasar
app.use((req, res) => {
    res.status(404).send('<h1>404</h4>')
})

app.listen(PORT, () => {
    console.log('server listening on port http://localhost:3005')
})
