
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
        {id: 1, pseudo: 'verbain',sumoner_name:'verbaintim',wallet:5},
        {id: 2, pseudo: 'rettah',sumoner_name:'verbaintim',wallet:1},
        {id: 3, pseudo: 'haard953',sumoner_name:'verbaintim',wallet:0}
      ]);
    });
};
