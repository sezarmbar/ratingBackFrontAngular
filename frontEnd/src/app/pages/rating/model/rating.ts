export class Rating {
    constructor(public id : string, public nameOfRat : string,public description: string, 
                public veryBad : string, public bad : string, public normal : string, 
                public god : string, public veryGod : string,public createdAt: string,public active:boolean) {}
}
