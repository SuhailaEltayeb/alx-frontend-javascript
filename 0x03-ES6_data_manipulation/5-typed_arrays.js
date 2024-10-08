const createInt8TypedArray = (length, position, value) => {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buf = new ArrayBuffer(length);
  const int8View = new DataView(buf);

  int8View.setInt8(position, value);

  return int8View;
};

export default createInt8TypedArray;
