'use strict';

class Car {
  #brand = '';
  #model = '';
  #milage = '';

  constructor(brand, model, milage) {
    this.#brand = brand;
    this.#model = model;
    this.#milage = milage;
  }

  get milage() {
    return this.#milage;
  }

  set milage(value) {
    this.#milage = value;
  }

  info() {
    console.log(`${this.#brand} ${this.#model} ${this.#milage}`);
  }
}
