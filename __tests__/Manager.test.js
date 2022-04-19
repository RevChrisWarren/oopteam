const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager')
//Test to confirm object was instantiated properly
test('creates a new employee object', () => {
    const manager = new Manager('John', 8, 'email', 6158285144);

    expect(manager.name).toBe('John');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('email');
    expect(manager.officeNumber).toEqual(expect.any(Number));
});