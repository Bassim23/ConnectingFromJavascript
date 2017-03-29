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

let firstName = process.argv[2];
let lastName = process.argv[3];
let birthDate = process.argv[4];

const query = knex('famous_people').insert({
  first_name: firstName,
  last_name: lastName,
  birthdate: birthDate
});

query.asCallback((err, results) =>{
   if (err) return console.error(err);
  console.log(query.toString())
  });
knex.destroy();