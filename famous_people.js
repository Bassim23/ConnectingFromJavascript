const settings = require("./settings");
const dateFormat = require("dateformat")
const knex = require('knex')({
  client: 'pg',
  connection: {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  }
});

let name = process.argv[2];

knex.select('*').from('famous_people')
.where('first_name', 'LIKE', "%" + name + "%")
.orWhere('last_name' ,'LIKE', "%" + name + "%")
.asCallback(function(err, rows){
  if (err) return console.error(err);
  console.log(rows)
});
