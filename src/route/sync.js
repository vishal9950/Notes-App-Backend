const Models = require('../../models');

const handler = (request, response) => {
  console.log('GET /sync');
  Models.notes.findAll().then((notes) => {
    response(notes);
  });
};

const handler1 = (request, response) => {
  console.log('PUT /sync');
  const notes = Object.values(request.payload);
  // console.log(notes);
  Models.notes.destroy({ truncate: true })
    .then(() => Models.notes.bulkCreate(notes))
    .then(() => response('Notes Synced to DB').code(201))
    .catch(() => response('Internal Server Error').code(500));
};

module.exports = [{
  path: '/sync',
  method: 'GET',
  handler,
},
{
  path: '/sync',
  method: 'PUT',
  handler: handler1,
}];
