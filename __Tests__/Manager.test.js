const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('Set office number', () => {
    const number = "202414";
    const manager = new Manager('Manger',1, "nitinvemuri@gmail.com", number);
    expect(manager.number).toBe(number)
});

test('Get Role', () => {
    const testingRole = 'Manager';
    const manager = new Manager('Manager', 1,"nitinvemuri@gmail.com", testingRole)
    expect(manager.getRole()).toBe(testingRole);
});