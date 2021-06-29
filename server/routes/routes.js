const express = require('express')

const db = require('../db/db')

const router = express.Router()

// router.get('/', (req, res) => {
//   db.getFruits()
//     .then(results => {
//       res.json({ fruits: results.map(fruit => fruit.name) })
//       return null
//     })
//     .catch(err => {
//       console.log(err)
//       res.status(500).json({ message: 'Something went wrong' })
//     })
// })

router.get('/', (req,res) =>  {
  db.getFloras()
    .then(results => {
      res.json({ floras: results.map(flora => flora)})
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong'})
    })
})

module.exports = router

// res.json({ floras: results.map(flora => flora.name) })
// return null