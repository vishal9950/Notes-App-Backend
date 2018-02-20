const handler = (request, response) => {
  response('GET /sync');
};

const handler1 = (request, response) => {
  response('PUT /sync');
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
