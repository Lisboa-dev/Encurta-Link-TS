import{fastify}from 'fastify';
import router from './router';

const server = fastify();

server.register(router);

server.listen({port:3000}, (err, address) => { });

