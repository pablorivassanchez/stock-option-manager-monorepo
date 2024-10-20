import Fastify from 'fastify';

const fastify = Fastify({ logger: true });

fastify.get('/', async (request, reply) => {
  reply.send({ message: 'Hello World' });
});
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log('Server is running at http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
