/* eslint-disable max-classes-per-file */
// export function Person(name) {
//   this.name = name;

//   // this.greetings = function () {
//   //   console.log(`Hola soy ${this.name}`);
//   // };
// }

// Person.prototype.greetings = function () {
//   console.log(`Hola soy ${this.name}`);
// };

// esto mismo de arriba pero en JS moderno.

export class Person {
  static specie = 'Homo Sapiens';
  constructor(name, legs) {
    name;

    legs;

    this.name = name;
    this.legs = 2;
  }

  greetings() {
    console.log(`Holi Holi soy ${this.name}`);
  }

  static showSpecie() {
    console.log(`soy ${this.Person.showSpecie}`);
  }
}

export class Alumni extends Person {
  constructor(name, course) {
    super(name);
    this.course = course;
  }
  // eslint-disable-next-line lines-between-class-members
  greetings() {
    super.greetings();
    console.log(`Y estudio ${this.course}`);
  }
}

export const x = 12;

const p1 = new Person('Pepe');
p1.legs = 1;
console.log(p1);
p1.greetings();

const p2 = new Person('Elena');
console.log(p2);
p2.greetings();

const a1 = new Alumni('Ernesto', 'javaScript');
console.log(a1.name);
a1.greetings();
