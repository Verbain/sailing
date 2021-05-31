
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
        {pseudo: 'verbain',sumoner_name:'verbaintim',wallet:5,email:'seb95370@gmail.com'},
        {pseudo: 'rettah',sumoner_name:'verbaintim',wallet:1,email:'kevin953@outlook.com'},
        {pseudo: 'haard953',sumoner_name:'verbaintim',wallet:0,email:'haard953@gmail.com'}
      ]);
    });
};
