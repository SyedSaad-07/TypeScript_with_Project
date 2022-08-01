"use strict";
// Classes 
// Access modifier :
// public --> can access (change/read) inside as well as from outside the class.
// private --> can access(change/read) from inside the class but can't access from outside the class.
// readonly --> can read only from outside/inside the class but can't write it.
exports.__esModule = true;
exports.Invoice = void 0;
var Invoice = /** @class */ (function () {
    // private client: string;
    // private details: string;
    // private amount: number;
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes $").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
exports.Invoice = Invoice;
