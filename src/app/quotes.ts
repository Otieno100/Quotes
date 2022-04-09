import { identifierName, Quote } from "@angular/compiler";

export class Quotes {
    // id!: number;
    // quotes!: string;
    // upVotes!:number;
    // downVotes!:number;




    public showDescription: boolean;
    constructor( public id: number,public quotes:string, public upVotes:number, public downVotes:number, public completeDate:Date,){
  

    this.showDescription=false;
    }
}
