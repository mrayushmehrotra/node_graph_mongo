import dotenv from "dotenv";
import express from "express";
import { ApolloServer } from "apollo-server-express";

import mongoose from "mongoose";

import db from "./utils/db.js"
import schema from "./schmea/index.js"

dotenv.config();
const app = express();
db();
const server = new ApolloServer({
  schema,
  cors: true,
  playground: process.env.NODE_ENV === "development" ? true : false,
  introspection: true,
  tracing: true,
  path: "/",
});

server.applyMiddleware({
  app,
  path: "/",
  cors: true,
  onHealthCheck: () =>
    new Promise((resolve, reject) => {
      if (mongoose.connection.readyState > 0) {
        resolve();
      } else {
        reject();
      }
    }),
});

app.listen({ port: process.env.PORT }, () => {
  console.log(`🚀 Server listening on port ${process.env.PORT}`);
  console.log(`😷 Health checks available at ${process.env.HEALTH_ENDPOINT}`);
});
