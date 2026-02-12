import client  from '../../infra/database/postgres'
import { LinkDto } from "./link.dtos";

export default class LinkRepository{
    static async getLink(id:string){
        client.connect();
        const result = await client.query(`SELECT * FROM "Link" WHERE id = $1`, [id]);
        client.end();
        return result
    }

    static async saveLink(Link:LinkDto){
        client.connect();
        await client.query(`INSERT INTO "Link" (id, shortUrl, originalUrl, createAt, updateAt) VALUES ($1, $2, $3, $4, $5)`, [Link.id, Link.shortUrl, Link.originalUrl, Link.createAt, Link.updateAt]);
        client.end();
    }

    static async deleteLink(id:string){
        client.connect();
        await client.query(`DELETE FROM "Link" WHERE id = $1`, [id]);
        client.end();
    }

    static async updateLink(Link:LinkDto){
        client.connect();
        await client.query(`UPDATE "Link" SET shortUrl = $1, originalUrl = $2, createAt = $3, updateAt = $4 WHERE id = $5`, [Link.shortUrl, Link.originalUrl, Link.createAt, Link.updateAt, Link.id]);
        client.end();
    }

    static async getLinks(){
        client.connect();
        const result = await client.query(`SELECT * FROM "Link"`);
        client.end();
        return result
    }

    static async deleteAllLinks(){
        client.connect();
        await client.query(`DELETE FROM "Link"`);
        client.end();
    }
}