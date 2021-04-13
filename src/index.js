import server from './graphql/server';

server.listen().then(({port}) =>
  console.log(`🚀 Server ready at http://localhost:${port}/`),
);
