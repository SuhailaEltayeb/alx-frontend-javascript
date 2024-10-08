const cleanSet = (set, startString) => {
  const stringArrgument = [];

  if (startString && startString.length > 0) {
    for (const el of set) {
      if (typeof el === 'string' && el.startsWith(startString)) {
        stringArrgument.push(el.substring(startString.length));
      }
    }
  }

  return stringArrgument.join('-');
};

export default cleanSet;
