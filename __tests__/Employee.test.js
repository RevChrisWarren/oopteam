const Employee = require('../lib/Employee');

test('creates a new employee object', () => {
    const employee = new Employee('John', 6, 'email');

    expect(employee.name).toBe('John');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('email');
});