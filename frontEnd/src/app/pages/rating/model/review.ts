import { Rating } from "./rating";
export class Review {
    constructor(public reviewId : string, public reviewText : string, 
                public rating : Rating) {}
}
