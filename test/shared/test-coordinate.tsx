import * as chai from 'chai';
import Coordinate from '../../src/shared/coordinate';
import fixture from './fixture-coordinate';

chai.should();

describe('Coordinate', () => {
  const {fromCounters} = fixture;

  describe('fromCounters', () => {
    fromCounters.forEach((tileCoordinates, i) => {
      tileCoordinates.forEach((fieldCoordinates, j) => {
        const {x, y} = fieldCoordinates;
        it(`should correctly convert pair of counters (${i}, ${j}) into (${x}, ${y}) point object`, done => {
          Coordinate.fromCounters({i, j}).should.eql(fieldCoordinates);
          done();
        });
      });
    });
  });

  describe('toCounters', () => {
    fromCounters.forEach((tileCoordinates, i) => {
      tileCoordinates.forEach((fieldCoordinates, j) => {
        const {x, y} = fieldCoordinates;
        it(`should correctly convert (${x}, ${y}) point object into pair of counters (${i}, ${j})`, done => {
          Coordinate.toCounters(fieldCoordinates).should.eql({i, j});
          done();
        });
      });
    });
  });
});
