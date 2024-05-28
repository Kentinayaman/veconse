class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    if (newName && newName.length > 0) {
      this._name = newName;
    } else {
      throw new Error('Name must be a non-empty string.');
    }
  }
}

// Usage
const person = new Person('Alice');
console.log(person.name); // Outputs: Alice
person.name = 'Bob';
console.log(person.name); // Outputs: Bob
