const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    let obj = {
        a: 'thanos',
        number : 34
    }
    res.json(obj)
})

module.exports = router