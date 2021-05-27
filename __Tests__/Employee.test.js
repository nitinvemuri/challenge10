const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee')

test('creates employee', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object')
});

test('create employee name', () => {
    const name = "Nitin";
    const employee = new Employee(name);
    expect(employee.name).toBe(name)
})

test('create employee id', () => {
    const testingId = 99;
    const employee = new Employee ("Nitin", testingId);
    expect(employee.id).toBe(testingId);
});

test('create employee email', () => {
    const testingEmail = 'nitinvemuri@gmail.com';
    const employee = new Employee ("Nitin", 1,  testingEmail);
    expect(employee.email).toBe(testingEmail);
})

test('get name', () => {
    const testingName = 'Nitin'
    const employee = new Employee("Nitin", testingName);
    expect(employee.getName()).toBe(testingName);
});

test('get role', () => {
    const testingRole = 'Employee';
    const employee = new Employee("Nitin", 1, "nitinvemuri@gmail.com");
    expect(employee.getRole()).toBe(testingRole);
});