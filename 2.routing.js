/* eslint-disable indent */
const http = require('node:http')

// commonJS -->modulos clásicos de node
const dittoJSON = require('./pokemon/ditto.json')

const processRequest = (req, res) => {
    const { url, method } = req

    switch (method) {
        case 'GET':
            switch (url) {
                case '/pokemon/ditto':
                    res.setHeader('Content-Type', 'application/json; charset=utf8')
                    return res.end(JSON.stringify(dittoJSON))
                default:
                    res.statusCode = 404
                    res.setHeader('Content-Type', 'text/html; charset=utf-8')
                    return res.end('<h1>404</h1>')
            }
    }
}

const server = http.createServer(processRequest)

server.listen(3005, () => {
    console.log('server listening on port http://localhost:3005')
})
