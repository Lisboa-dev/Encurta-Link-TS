import { FastifyInstance } from "fastify"
import { LinkController } from "./controllers/Link.controller"

async function linkRouter(fastify: FastifyInstance) {
  const controller = new LinkController()
  
  fastify.get("/:id", controller.getLink)

}

async function userRouter(fastify: FastifyInstance) {}
async function adminRouter(fastify: FastifyInstance) {}
async function authRouter(fastify: FastifyInstance) {}
async function agentRouter(fastify: FastifyInstance) {}

async function router(fastify: FastifyInstance) {
  fastify.register(linkRouter, { prefix: "/links" })
  fastify.register(userRouter, { prefix: "/users" })
  fastify.register(adminRouter, { prefix: "/admin" })
  fastify.register(authRouter, { prefix: "/auth" })
}

export  default router;