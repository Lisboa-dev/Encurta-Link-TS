import Link from "./link.domain"
import LinkRepository from "./link.repository"

export class LinkUseCases{

    createLink(url:string){
        const link = new Link
        link.create(url)
        
        LinkRepository.saveLink(link)
    }
    deleteLink(id:string){
       
    }
    updateLink(){

    }

    static getLink(id:string){return true}
    getLinks(){

    }
}