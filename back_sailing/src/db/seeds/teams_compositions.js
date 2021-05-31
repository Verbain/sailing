
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('teams_compositions').del()
    .then(function () {
      // Inserts seed entries
      return knex('teams_compositions').insert([
        {id_player: 1,id_team:1,status:'captain'},
        {id_player: 3,id_team:1,status:'player'},
        {id_player:1,id_team:2,status:'player' },
          {id_player: 2,id_team:2,status:'captain'},
          {id_player: 3,id_team:3,status:'captain'}
      ]);
    });
};
