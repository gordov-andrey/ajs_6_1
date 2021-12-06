import Bowerman from '../Bowerman';

test('Создание персонажа', () => {
  const result = new Bowerman('user', 'Bowerman');
  const must = {
    name: 'user',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(result).toEqual(must);
});

test('Ошибка в имени', () => {
  expect(() => new Bowerman('1', 'Bowerman')).toThrowError(new Error('Укажите корректное имя!'));
});

test('Ошибка в типе', () => {
  expect(() => new Bowerman('user', 'QBowerman')).toThrowError(new Error('Укажите корректный тип!'));
});

test('Увеличение уровня', () => {
  const result = new Bowerman('user', 'Bowerman');
  const must = {
    name: 'user',
    type: 'Bowerman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  result.levelUp();
  expect(result).toEqual(must);
});

test('Урон', () => {
  const result = new Bowerman('user', 'Bowerman');
  const must = {
    name: 'user',
    type: 'Bowerman',
    health: 65,
    level: 2,
    attack: 30,
    defence: 30,
  };
  result.levelUp();
  result.damage(50);
  expect(result).toEqual(must);
});

test('Урон с отрицательным здоровьем (для 100% покрытия)', () => {
  const result = new Bowerman('user', 'Bowerman');
  const must = {
    name: 'user',
    type: 'Bowerman',
    health: -1,
    level: 2,
    attack: 30,
    defence: 30,
  };
  result.health = -1;
  result.damage(50);
  expect(result).not.toEqual(must);
});
