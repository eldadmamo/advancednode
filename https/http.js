const http = require('http');

const data = [
    {
        id: 1,
        name: "Eldad",
    }, 
    {
        id: 2,
        name: "Fikre"
    }
]

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Content-Language', 'en-US')
    res.setHeader('Date', new Date(Date.now()))
    res.setHeader('')

    res.end(
        JSON.stringify({
            message: 'Data is sent',
            results: data.length,
            data: data
        })
        
    ) 
})

server.listen(3000, () => {
    console.log('Server is Activated')
})