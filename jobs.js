const express = require('express');
const router = express.Router();

router.get('/jobs', (req,res) => {
    res.status(200).json({
        success: true,
        message: 'This router will display all jobs in future'
    })
})

module.exports = router;


const express = require('express');
const app = express();
const connectDatabase = require('./https/database');
require('dotenv').config();
const jobs = require('./jobs');

const PORT = process.env.PORT;

connectDatabase()

const middleware =(req,res,next) => {
    console.log('Hello from middleware');
    req.user = 'Eldad Mamo'
    next();
}

app.use(middleware);

app.get('/', (req,res) => {
    console.log(req.body);

    res.status(200).json({
        message: "it was successful",
        data: req.body
    })
})

app.use('/api',jobs)

app.listen(PORT, () => {
    console.log('Our God is love')
})