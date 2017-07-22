import { Rating } from "./rating";
export class Review {
    constructor(public reviewId : string, public review : string, 
                public rating : Rating) {}
}
