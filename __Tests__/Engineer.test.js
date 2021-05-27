const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('Github page setup for engineer', () => {
    const github = 'Github';
    const engineer = new Engineer ('Engineer', 1, 'engineername@gmail.com', github);
    expect(engineer.github).toBe(github);
});

test('get github', () => {
    const github = 'Github';
    const engineer = new Engineer ('Engineer', 1, 'engineername@gmail.com', github);
    expect(engineer.getGithub()).toBe(github)
});

test('Engineer role', () => {
    const testingRole = 'Engineer';
    const engineer  = new Engineer ('Engineer', 1, 'testanemail@gmail.com',testingRole );
    expect(engineer.getRole()).toBe(testingRole);
});
