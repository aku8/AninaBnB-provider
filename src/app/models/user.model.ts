import { listing } from './listing.model';

export class User{
    public firstname: string;
    public lastname: string;

    public past_rentals: listing[] = new Array<listing>();
    public saved_rentals: listing[] = new Array<listing>();

    constructor() {
        this.firstname = "";
        this.lastname = "";
        this.past_rentals = [];
        this.saved_rentals = [];
    }

    public setFirstName(firstname: string) {
        this.firstname = firstname;
    }

    public setLastName(lastname: string) {
        this.lastname = lastname;
    }
    }

   
    
