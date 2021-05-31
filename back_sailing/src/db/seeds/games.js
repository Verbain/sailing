
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {team_1: 1,team_2:2,result:1,game_name:'10 euros money match',mise:10},
        {team_1: 1,game_name:'Come face us',mise:10},
        {team_1: 1,game_name:'test',mise:10},
          {team_1: 2,game_name:'grrrrrr',mise:42},
          {team_1: 1,game_name:'paslememe',mise:9},
          {team_1: 2,game_name:'uwu',mise:12},
      ]);
    });
};
