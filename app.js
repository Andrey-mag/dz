'use strict';

const Character = function (race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
};

Character.prototype.speak = function () {
  console.log(`${this.language} ${this.name}`);
};

function Ork(name, weapon) {
  Character.call(this, 'Ork', name, 'Орский');
  this.weapon = weapon;
}

Ork.prototype = Object.create(Character.prototype);
Ork.prototype.constructor = Ork;
Ork.prototype.hit = function () {
  console.log('Make a hit');
};

function Elf(name, spellType) {
  Character.call(this, 'Elf', name, 'Эльфиский');
  this.spellType = spellType;
}

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;
Elf.prototype.magic = function () {
  console.log('Применение заклинания');
};
Elf.prototype.createMagic = function () {
  console.log('Создание заклинания');
};
