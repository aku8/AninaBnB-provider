export class listing{
    public name: string;
    public location: string;
    public price: number; 
    public imageUrl: string;
    public id: number;
    public userId: number;

    constructor(){
        this.name = "";
        this.location = "";
        this.price = 0;
        this.imageUrl = "";
        this.id = 0;
        this.userId = 0;
    }
}