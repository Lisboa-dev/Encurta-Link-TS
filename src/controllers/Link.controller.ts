
import {LinkUseCases} from '../@core/link/link.use-cases';
import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify"

export  class LinkController{

    async getLink(req:FastifyRequest, res:FastifyReply){
        try {
            const { id } = req.params as { id: string }     
            const link = await LinkUseCases.getLink(id);

            if (!link) {
                return res.status(404).send({ message: 'Link not found' });
            }
        }catch (error) {
            console.error('Error fetching link:', error);
            return res.status(500).send({ message: 'Internal server error' });
        }
    }
}