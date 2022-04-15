const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer')

test('creates a new employee object', () => {
    const engineer = new Engineer('John', 43, 'email', 'github');

    expect(engineer.name).toBe('John');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('email');
    expect(engineer.github).toBe('github');
});