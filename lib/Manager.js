const Employee = require('../lib/Employee')

class Manager extends Employee {
    constructor(name,id,email,number) {
        super(name,id,email)
        this.title = 'Manager';
        this.number = number;
    }
    getNumber() {
        return this.number;
    }

}

module.exports = Manager;