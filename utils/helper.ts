export const chunk = (array: [], size: number) => {
  return array
    .reduce((chunks: Array<[]>, item: [], i: number) => {
      if (i % size === 0) {
        chunks.push([item]);
      } else {
        chunks[chunks.length - 1].push(item);
      }
      return chunks;
    }, [])
    .filter((chunk) => chunk.length === size);
};
