const user = {
  health: 10,
  level: 2,
  name: 'мечник',
  attack: 80,
  defence: 40,
};
const order = ['name', 'level'];

function orderByProps(obj, ord) {
  const sortOrd = [];
  const sortOther = [];

  Object.entries(obj).forEach((item) => {
    if (item[0] === ord[0]) {
      sortOrd.push(item);
    } else if (item[0] === ord[1]) {
      sortOrd.push(item);
    } else {
      sortOther.push(item);
    }
  });
  sortOrd.sort((a, b) => {
    if (a > b) {
      return -1;
    }
    return 1;
  });
  sortOther.sort();

  const arrSorted = [...sortOrd, ...sortOther];
  const result = [];

  arrSorted.reduce((acc, curr) => {
    if (result.length === 0) {
      result.push({ key: acc[0], value: acc[1] });
    }
    result.push({ key: curr[0], value: curr[1] });
    return acc;
  });
  return result;
}

export default orderByProps;
