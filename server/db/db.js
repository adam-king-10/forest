const connection = require('./connection')

// function getFruits (db = connection) {
//   return db('fruit').select()
// }

function getFloras (db = connection) {
  return db('floras').select()
}

module.exports = {
  // getFruits,
  getFloras
}
