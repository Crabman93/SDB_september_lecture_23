//! Classes
/* 
    -Introduced in 2015
    - A function that helps us create objects
    - Defines a category of objects

    * Base Structure:

        class NameOfClass {
            constructor(parameter){
                this.key = parameter;
            }

            methodName() {
                ... code block
            }
        }
*/

class NewObject {
    constructor(){
        this.name;
        this.desc;
    }
}

let one = new NewObject();
one.name = 'sample';
//console.log(one);

//(1) (2)
class item{
    // (3)          (4)
    constructor(name,desc,price){
//      (5)   (6)   (7)
        this.name = name;
        this.description = desc;
        this.price = price;
    }
}

/*
    1. keyword to establish what type of "function"
    2. The name of our class. Should be Pascal Case.
    3.Keyword - is automatically run when the class is instantiated.
    4. The parameters for our constructed object. est. values of the new object.
    5. keyword - Refers to "this" specific object being created.
    6. the name of the key to our new object.
    7. The value for those keys being created (set by parameters).
 */

    let itemZero = new item();
    //console.log(itemZero); // returns an obj w/ set keys that holed undefined values.

    let itemOne = new item('beans', 'canned', 0.89);
    //console.log(itemOne);

    //let brokenItem = Item();
    //console.log(brokenItem);
    //Type error: Class constructor Item cannot be invoked without 'new'

    //! Factory functions

    let iType = 'Tomato Soup';
    let iDesc = 'canned';
    let iCost = 1.29;

    function processItem(i,d,c){
        return new item(i,d,c);
    };
    let useFunction = processItem(iType,iDesc,iCost);
   // console.log(useFunction);

//! Methods
class DepthInventory{
    constructor(dept){
        this.department = dept;
        this.items = []; //making a default value for this key.
    }

// (1)          (2)
addToInventory(newItem){
//     (3)           (4)    
    this.items.push(newItem);
    console.log('Item Added!')
}
}

// (5)
let dryGoods = new DepthInventory('Dry Goods');

let itemTwo = new item('corn', 'canned', 0.79);

// (6)
dryGoods.addToInventory(itemTwo);
console.log(dryGoods);

/* 
    1. Establish a name of the method.
    2. This method requires a parameter. (not all methods will need this)
    3. "this" keyword references the specific object (dryGoods).
    4. Using an array method to add the "item object" to the items array.
    5. Creating new objects (Dept / Item)
    6. Invoking the method available to dryGoods object.
*/

//! Factory Methods

class Expense {
    static addUpchargeForProfit(wholesale){
        let upcharge = wholesale + (wholesale * .25);
        return new Expense(wholesale, upcharge);
    }

    constructor(w,s){
        this.purchased_price = w;
        this.sell_at = s;
        this.sales_tax;
    }

    addTax(x){
        let percentage = x;
        let saleCost = this.sell_at;

        this.sales_tax = (saleCost = (saleCost * percentage)).toFixed(2);
    }
}

let itemToSell = Expense.addUpchargeForProfit(1);
itemToSell.addTax(0.07);
console.log(itemToSell);

let anotherItem = Expense.addUpchargeForProfit(5);
anotherItem.addTax(0.06);
console.log(anotherItem);