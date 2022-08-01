// Classes 
// Access modifier :
// public --> can access (change/read) inside as well as from outside the class.
// private --> can access(change/read) from inside the class but can't access from outside the class.
// readonly --> can read only from outside/inside the class but can't write it.

import { HasFormatter } from "../interfaces/HasFormatter.js"

export class Invoice implements HasFormatter {
    
    // private client: string;
    // private details: string;
    // private amount: number;

    constructor(private client: string, private details: string, private amount: number){}

    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}
