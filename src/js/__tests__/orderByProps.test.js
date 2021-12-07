import orderByProps from '../orderByProps';

test('Сортировка по ключам', () => {
  const user = {
    health: 10,
    name: 'мечник',
    level: 2,
    attack: 80,
    defence: 40,
  };
  const order = ['name', 'level'];
  const result = orderByProps(user, order);
  const must = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];

  expect(result).toEqual(must);
});

test('Сортировка по ключам c другой последовательностью', () => {
  const user = {
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
    name: 'мечник',
  };
  const order = ['name', 'level'];
  const result = orderByProps(user, order);
  const must = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];

  expect(result).toEqual(must);
});

