export default class Coordinate {

  /**
   * Convert (i, j) pair to (x, y) coordinates object.
   * @param  {Object} p Pair of (i, j) array counters.
   * @return {Object}   Pair of {x, y} points.
   */
  static fromCounters(p) {
    return {
      x: (p.i % 3) * 2 + (p.j % 2),
      y: Math.floor(p.i / 3) * 2 + Math.floor(p.j / 2),
    };
  }

  /**
   * Convert (x, y) pair into (i, j) array counters pair.
   * @param  {Object} p Pair of (x, y) points.
   * @return {Object}   Pair of (i, j) array counters.
   */
  static toCounters(p) {
    return {
      i: Math.floor(p.x / 2) + Math.floor(p.y / 2) * 3,
      j: (p.x % 2) + (p.y % 2) * 2,
    };
  }

}
