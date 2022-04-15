const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern')

test('creates a new employee object', () => {
    const intern = new Intern('John', 3, 'email', 'school');

    expect(intern.name).toBe('John');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('email');
    expect(intern.school).toBe('school');
});