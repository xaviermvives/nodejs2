/* eslint-disable indent */
const http = require('node:http')
const fs = require('node:fs')

console.log(process.env)

const desiredPort = process.env.PORT ?? 3005

const processRequest = (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    if (req.url === '/') {
        res.statusCode = 200
        res.end('<h1>Bienvenido a mi página web</h1>')
    } else if (req.url === '/contacto') {
        res.statusCode = 200
        res.end('<h1>Contacto</h1>')
    } else if (req.url === '/image.png') {
        fs.readFile('./bitcoin.png', (err, data) => {
            if (err) {
                res.statusCode = 500
                res.end('<h1>Internal Server Error</h1>')
            } else {
                res.statusCode = 200
                res.setHeader('Content-Type', 'image/png')
                res.end(data)
            }
        })
    } else {
        res.statusCode = 404 // Not found
        res.end('<h1>404</h1>')
    }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
    console.log(`server listenning on port http://localhost${desiredPort}`)
})
