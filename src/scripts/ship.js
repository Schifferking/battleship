const Ship = (length) => {
  let hits = 0;
  const getHits = () => hits;
  const hit = () => {
    hits += 1;
  };
  const isSunk = () => length === getHits();
  return { length, getHits, hit, isSunk };
};

module.exports = Ship;
