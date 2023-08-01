const http = require('node:http')

console.log(process.env)

const desiredPort = process.env.PORT ?? 3000

const processRequest = (req, res) => {
    console.log('request received:', req.url)
    res.end('hola mundo')
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
    console.log(`server rlistenning on port http://localhost${desiredPort}`)
})
