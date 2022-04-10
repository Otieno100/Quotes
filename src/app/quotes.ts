import { identifierName, Quote } from "@angular/compiler";

export class Quotes {
   


    // public upVotes: number;
    // public downVotes: number;
    public showDescription: boolean;
    
    constructor( public quoteAuthor: string, public userName: string, public quoteTitle: string, public quoteDescription: string, public name: string, public completeDate: Date, public upVotes: number, public downVotes: number) {

        // this.upVotes = 0;
        // this.downVotes = 0;

        this.showDescription= false;
    }
}
