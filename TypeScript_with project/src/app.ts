// const anchor = document.querySelector('a');
// console.log(anchor?.href);

// above code for handling null dom values
// **************** OR the code below ****************

// const anchor = document.querySelector('a')!;
// console.log(anchor.href);


import { Invoice } from "./classes/Invoices.js";
import { Payment } from "./classes/Payments.js"; 
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";



const form = document.querySelector('.new-item-form') as HTMLFormElement ;  // this is type casting on DOM

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber];
    
    let doc: HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(...values);
    }else{
        doc = new Payment(...values);
    }

    list.render(doc, type.value, 'end');
    
});