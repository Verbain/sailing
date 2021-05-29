
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('teams').insert([
        {id: 1, team_name: 'Sailing',team_picture:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.heliosgaming.fr%2F&psig=AOvVaw2Iq78U7QGg2aqvMbSNhyII&ust=1621857669237000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKiu4OTg3_ACFQAAAAAdAAAAABAD'},
        {id: 2, team_name: 'Helios Gaming'},
        {id: 3, team_name: 'Magic'}
      ]);
    });
};
