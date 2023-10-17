/* eslint-disable no-plusplus */
import Character from './character';

export default class Math extends Character {
  constructor(name, type) {
    super(name, type);
    this.defence = 40;
    this.distance = undefined;
  }

  setAttack(attack) {
    this.attack = attack - (attack / 10) * (this.distance - 1);
  }

  setStoned(data) {
    if (typeof (data) !== 'boolean') return;
    this.stoned = data;
  }
}
