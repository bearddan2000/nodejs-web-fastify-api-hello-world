// Require the framework and instantiate it
const app = require('fastify')({
    logger: true
})

// Declare a route
app.get('/', function (req, reply) {
  app.log.info('reached / endpoint');
  reply.send({message: "hello world"});
})

// Run the server!
app.listen(3000, '0.0.0.0')
