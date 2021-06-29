
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('floras').del()
    .then(function () {
      // Inserts seed entries
      return knex('floras').insert([
        { id: 1, name: 'pohutakawa', images:'/images/flora/pohutakawas/Pohutukawa_FlatAngle_01.png'},
        { id: 2, name: 'punga', images:'/images/flora/pungas/Punga_FlatAngle_01.png'},
        { id: 3, name: 'kauri', images: '/images/flora/Kauris/kahikatea.png' }
      ])
    })
}

