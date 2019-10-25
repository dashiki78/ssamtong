import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from 'body-parser';
const { ApolloServer } = require('apollo-server-express');

import typeDefs from './typeDefs'
import resolvers from './resolvers'

const app = express();

app.use(helmet());
app.use(morgan("dev"));

const server = new ApolloServer({
  typeDefs,
  resolvers
});
const path = '/graphql';
server.applyMiddleware({ app, cors: false, path });

export default app;