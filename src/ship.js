function Ship(length) {
  let hits = 0;

  function hit() {
    this.hits++;
  }

  function isSunk() {
    return this.hits == this.length ? true : false;
  }

  return { length, hits, hit, isSunk };
}

export default Ship;
