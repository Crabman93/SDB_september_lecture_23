/* 
    -Employees
        -manager
            -Create tables
        -host
            - Set tables
        -server
            - Serve tables

        Employee Number

    - Table
*/

const employeeNumbers = [];

class Employee {

static setEmployee(role,name,payRate) {
    // Create a random employee number
    const setEmployeeNumber = Math.floor(Math.random()*(100 - 1) + 1);
    let numberToUse;

    if(employeeNumbers.includes(setEmployeeNumber)) {
        let tempNumber = setEmployeeNumber + 'a';
        employeeNumbers.push(tempNumber);
        numberToUse = tempNumber;
    } else {
        employeeNumbers.push(setEmployeeNumber);
        numberToUse = setEmployeeNumber;
    }

    //Set Hire Date
    let today = new Date();

    //Set Role
    const usedClass = role; //Designates the class to target.

    return new usedClass(name, numberToUse, today, payRate);
}

    constructor(name, empNumber, date, payRate) {
        this.name = name;
        this.employee_number = empNumber;
        this.date = date;
        this.payRate = Number(payRate.toFixed(2));
    }
}

class Manager extends Employee {

    constructor(name, employee_number, dateHired, payRate){
        super(name,employee_number, dateHired, payRate);
        this.role = 'manager';
    }
}

const employee = Employee.SetEmployee(server, 'Joe', 18);
const manager = Employee.setEmployee(Manager, 'Jane', 18);
const host = Employee.setEmployee(Host, 'Jack', 18);
console.log(manager, server, host);

// Tables have
class Table {
    constructor(tableNumber, seatNumber) {
        this.tableNumber = tableNumber;
        this.seatNumber = seatNumber;
        this.seated = false;
        this.status = 'empty';
    }

    updateSeating(){
        if(this.seated){
            this.seated = false;
        } else {
            this.seated = true;
            this.status = 'Waiting...'
        }
    }

    updateStatus(status){
        if(status !== undefined){
            this.status = status;
        } else {
            this.status = 'waiting...';
        }
    }
}

const table = new Table(1, 4);
table.updateStatus('eating...');
console.log(table);
