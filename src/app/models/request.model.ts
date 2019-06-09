
export class Request{
    id: number;
    userId: string;
    propertyId: number;
    startDate: Date;
    endDate: Date;
    constructor() {
        this.id = 0;
        this.userId = "";
        this.propertyId = 0;
        this.startDate = null,
        this.endDate = null
    }
}
    
