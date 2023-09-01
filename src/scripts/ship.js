const Ship = (length) => {
  let hits = 0;
  const sunk = false;
  const getHits = () => hits;
  const hit = () => {
    hits += 1;
  };
  const isSunk = () => length === getHits();
  return { length, sunk, getHits, hit, isSunk };
};

module.exports = Ship;
