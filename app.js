'use strict';

class Character {
  constructor(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
  }

  speak() {
    console.log(`${this.language} ${this.name}`);
  }
}

class Ork extends Character {
  constructor(name, weapon) {
    super('Ork', name, 'Оркский');
    this.weapon = weapon;
  }

  hit() {
    console.log('Make a hit');
  }

  speak() {
    console.log(`Я ${this.name}, и я говорю по ${this.language}`);
  }
}

class Elf extends Character {
  constructor(name, spellType) {
    super('Elf', name, 'Эльфиский');
    this.spellType = spellType;
  }

  magic() {
    console.log('Применение заклинания');
  }

  createMagic() {
    console.log('Создание заклинания');
  }

  speak() {
    console.log(
      `Меня зовут ${this.name}, я разговариваю по ${this.language} пиу пиу`
    );
  }
}

const ork = new Ork('Fill', 'Sword');
ork.speak;

const elf = new Elf('Gendolf', 'Prima');
