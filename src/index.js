/* eslint-disable no-unused-vars */
import Daemon from './js/class/daemon';
import ArrayBufferConverter from './js/class/array-buffer';
import getBuffer from './js/get-buffer';

const daemon = new Daemon('Biba');
daemon.distance = 3;
daemon.setAttack(100);
daemon.setStoned(true);
console.log(daemon);
