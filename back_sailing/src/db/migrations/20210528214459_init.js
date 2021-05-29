
exports.up = function(knex) {
  return knex.schema
      .createTable('players', function (table){
          table.increment('id');
          table.string('pseudo');
          table.string('sumoner_name');
          table.string('riot_accoumpt_id');
          table.string('profile_picture');
          table.string('op_gg');
          table.string('player_rank');
          table.integer('wallet');
      })
      .createTable('teams',function (table){
          table.increment('id');
          table.string('team_name');
          table.string('team_picture');
          table.integer('team_wallet');
      })
      .createTable('teams_compositions', function (table){
          table.increment('id');
          table.integer('id_player');
          table.foreign('id_player').references('players.id');
          table.integer('id_team');
          table.foreign('id_team').references('teams.id');
          table.string('status').defaultTo('player');
      })
      .createTable('games',function (table){
          table.increment('id');
          table.string('riot_game_id');
          table.timestamp(true, true);
          table.integer('team_1');
          table.foreign('team_1').references('teams.id');
          table.integer('team_2');
          table.foreign('team_2').references('teams.id');
          table.string('game_name');
          table.integer('mise');
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('games')
        .dropTable('teams_compositions')
        .dropTable('teams')
        .dropTable('players')
};
