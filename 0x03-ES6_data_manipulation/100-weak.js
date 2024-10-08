const weakMap = new WeakMap();
const NUM_QUERIES = 4;

const queryAPI = (endPoint) => {
  if (!weakMap.has(endPoint)) {
    weakMap.set(endPoint, 0);
  }

  const queries = weakMap.get(endPoint);

  weakMap.set(endPoint, queries + 1);

  if (queries >= NUM_QUERIES) {
    throw new Error('Endpoint load is high');
  }
};

export { queryAPI, weakMap };
