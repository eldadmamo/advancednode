const express = require('express');
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    console.log(req.method)
    res.send(200).json({
        message: 'All about request object'
    })
})

app.post('/apps', (req,res) => {
    console.log(req.body);
    res.status(200).json({
        message: "Our God is love",
        data: req.body
    })
})

app.get('/app/:name', (req,res) => {
    console.log(req.query);
    res.status(200).json({
        message: 'All name is query Object'
    })
})

app.get('/app/:name', (req,res) => {
    console.log(req.params.name);
    res.status(200).json({
        message: 'All name is request Object'
    })
})

app.listen(3000, () => {
    console.log('Server is started')
})