import Coordinate from './coordinate';

export default class Player {

  constructor(pieces = [], cssClass = '') {
    this.pieces = pieces;
    this.cssClass = cssClass;
  }

  static isAnyAtCoordinate(players, coordinate, returnCallback = val => val) {
    // If coordinate argument is (i, j) point, convert it to (x, y) point object.
    const pos = coordinate.i !== undefined && coordinate.j !== undefined ? Coordinate.fromCounters(coordinate) : coordinate;
    for (const player of players) {
      for (const piece of player.pieces) {
        if (pos.x === piece.x && pos.y === piece.y) {
          return returnCallback(true, player);
        }
      }
    }
    return returnCallback(false, undefined);
  }

  static getStyleAtPosition(players, coordinate) {
    return Player.isAnyAtCoordinate(players, coordinate, (exists, player) => exists ? player.cssClass : '');
  }

}

const positons = {
  player1: [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: 1 },
    { x: 1, y: 1 },
  ],
  player2: [
    { x: 4, y: 4 },
    { x: 5, y: 4 },
    { x: 4, y: 5 },
    { x: 5, y: 5 },
  ],
};

export {positons as PlayerPositions};
