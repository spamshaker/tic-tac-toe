export const lazy = (cells: (string | false)[]): number => {
  let index = -1;
  cells.some((cell, i) => {
    if (cell === false) {
      index = i;
      return true;
    }
  });
  return index;
};

//todo Implement minmax
