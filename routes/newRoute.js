const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('form')
})

router.use(express.urlencoded());
router.use(express.json());

router.post('/', (req, res) => {
    console.log(req.body, 'hmm')
    messages.push({
         text: req.body.text,
         user: req.body.user,
         added: new Date()
        })
        res.redirect('/')
})

module.exports = router