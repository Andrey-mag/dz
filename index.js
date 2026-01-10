import { Task } from './task.js';
import { User } from './user.js';

const TASK = new Task('какое то сообщение');
const USER = new User(TASK);

USER.do();
