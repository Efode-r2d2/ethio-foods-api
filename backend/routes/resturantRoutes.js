const express = require('express')
const res = require('express/lib/response')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({Status : true, Message : 'Here are list of resutrants.'})
})

router.post('/', (req, res) => {
    res.status(201).json({Status: true, Message : 'Resturant created successfully.'})
})

router.get('/:id', (req, res) =>{
    res.status(200).json({Status: true, Message : 'Resturant info.'})
})

router.put('/:id', (req, res) => {
    res.status(200).json({Status:true, Message : 'Resturant updated'})
})

router.delete('/:id', (req, res) => {
    res.status(200).json({Status : true, Message : 'Resturant deleted.'})
})

module.exports = router