import Character from './Character';

class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

export default Daemon;
