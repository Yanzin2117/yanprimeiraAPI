const express = require ('express')
const router = express.Router()
const path = require('path') 
router.get ('/', (req, res) => {
    res.send ('Ola mundo!')
})

router.get ('/home', (req, res) => {
    res.send ('Vc esta na pagina principal')
})
router.get ('/teste', (req, res) => {
    res.send ('teste')
})
router.use(function, (req, res,next){
    res.status(404).send ('que pena rota não encontrada :(')
})
module.exports = router