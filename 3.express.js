/* eslint-disable indent */
const express = require('express')

const app = express()

const PORT = process.env.PORT ?? 3005

app.get('/', (req, res) => {
    // res.status(200).send('<h1>Mi página</h1>')
    // eslint-disable-next-line indent
    res.json({ message: 'Hola mundo' })
})

app.post('/pokemon', (req, res) => {
    let body = ''

    // escuchar evento data
    req.on('data', chunk => {
        body += chunk.toString()
    })

    req.on('end', () => {
        const data = JSON.parse(body)
        // llamar a una base de datos par guardar la info
        data.timestamp = Date.now()
        res.status(201).json(data)
    })
})

app.listen(PORT, () => {
    console.log('server listening on port http://localhost:3005')
})
