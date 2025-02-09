import { FastifyInstance } from "fastify";
import { authenticate } from "./controllers/authenticate";
import { register } from "./controllers/users/register";

export async function appRoutes(app: FastifyInstance) {
  app.post("/sessions", authenticate);
  app.post("/users", register);
}