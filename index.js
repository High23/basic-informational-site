const http = require('http')
const fs = require('fs')
const url = require('url')

const hostname = '127.0.0.1'
const port = 8080


const server = http.createServer((req, res) => {
    let filename = 'index.html'
    if (req.url !== '/') {
        filename = req.url.slice(1) + '.html'
    }
    fs.readFile(filename, function(err, data1) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'})
            fs.readFile('./404.html', async function(err, data2) {
                if (err) throw err
                res.write(data2)
                return res.end()
            })
            return 
        }
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data1)
        return res.end()
    })
})
console.log(server.IncomingMessage)
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
