'use strict';
const USER_LIST = [
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 1, name: 'Вася' },
];

const UNIQ_USER_LIST_IDS = new Set(USER_LIST.map((item) => item.id));

const UNIQ_USER_LIST = [...UNIQ_USER_LIST_IDS].map((id) =>
  USER_LIST.find((item) => item.id === id)
);
