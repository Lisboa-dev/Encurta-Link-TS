import Link from "./link.domain";
import { LinkDto } from "./link.dtos";

class LinkMapper{
   
    toDomain(raw: any): Link {return Link}
    //toPersistence(link: Link): any {    }
    toDto(link: Link): any {    }
    toJson(link: Link): any {    }
    JsonToLink(json: any): Link {   return Link }
}