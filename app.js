'use strict';

const Character = function (race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
};

Character.prototype.speak = function () {
  return `${this.language} ${this.name}`;
};

function Ork(name) {
  Character.call(this, 'Ork', name, 'Орский');
}

Ork.prototype = Object.create(Character.prototype);
Ork.prototype.constructor = Ork;
Ork.prototype.hit = function () {
  console.log('Make a hit');
};
Ork.prototype.weapon = 'Дубина';

function Elf(name) {
  Character.call(this, 'Elf', name, 'Эльфиский');
}

Elf.prototype = Object.create(Character.prototype);
Elf.constructor = Elf;
Elf.prototype.magic = function () {
  console.log('Применение заклинания');
};
Elf.prototype.createMagic = function () {
  console.log('Создание заклинания');
};
