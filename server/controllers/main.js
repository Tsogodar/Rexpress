const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Express server')
})

router.get('/example', (req, res) => {
    let exampleData = [
        {
            a:2,
            b:2,
            operator:'+',
            result:4
        },
        {
            a:4,
            b:1,
            operator:'-',
            result:3
        }
    ]
    res.json(exampleData)
})


module.exports = router