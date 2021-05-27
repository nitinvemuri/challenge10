
const { test } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('get interns school', () => {
    const school = 'school';
    const intern = new Intern ('Intern', 1, 'internemail@gmail.com', school);
    expect(intern.school).toBe(school)
});

test('get interns school with getschool', () => {
    const school = 'school';
    const intern = new Intern ('Intern', 1, 'internemail@gmail.com', school);
    expect(intern.getSchool()).toBe(school);
});

test('get role for intern', () => {
    const testingRole = "Intern";
    const intern = new Intern ('Intern', 1 , 'internsemail@gmail.com', testingRole);
    expect(intern.getRole()).toBe(testingRole);
})