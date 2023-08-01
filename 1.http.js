const http = require('node:http')

console.log(process.env)

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
    console.log('request received:', req.url)
    res.end('hola mundo')
})

server.listen(desiredPort, () => {
    console.log(`server rlistenning on port http://localhost${desiredPort}`)
})
