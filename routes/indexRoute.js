const express = require('express')
const router = express.Router()

const messages = [
    {
        text: 'Hello World',
        user: 'Dylan',
        added: new Date()
    },
    {
        text: 'here comes the pain train',
        user: 'Tripp',
        added: new Date()
    }
]

router.get('/', (req, res) => {
    res.render('index', { title: 'Hello Earthlings', messages})
})

router.get('/new', (req, res) => {
    res.render('form')
})

router.use(express.urlencoded());
router.use(express.json());

router.post('/new', (req, res) => {
    console.log(req.body, 'hmm')
    messages.push({
         text: req.body.text,
         user: req.body.user,
         added: new Date()
        })
        res.redirect('/')
})

module.exports = router