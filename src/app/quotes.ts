import { identifierName, Quote } from "@angular/compiler";

export class Quotes {
    id!: number;
    quote!: string;
    upVotes!:number;
    downVotes!:number;



    public showDescription: boolean;
    constructor(id: number, quote:string, upVotes:number, downVotes:number){
    this.id = id,
    this.quote = quote,
    this.upVotes = upVotes,
    this. downVotes = downVotes

    this.showDescription=false;
    }
}
