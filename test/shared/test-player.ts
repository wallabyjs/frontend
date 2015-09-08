import chai from 'chai';
import sinon from 'sinon';
chai.use(require('sinon-chai'));
import Player, {PlayerPositions} from '../../js/shared/player';

chai.should();

describe('Player', () => {
  const testCssClass = '.test-class';

  let player;
  let players;
  let playerAtCoordinate;
  let playerCoordinate;
  let nonExistentCoordinate;

  beforeEach(done => {
    player = new Player(PlayerPositions.player1, testCssClass);
    players = [player];
    playerCoordinate = {x: 0, y: 0};
    nonExistentCoordinate = {x: 1000, y: 1000};
    playerAtCoordinate = players[0];
    done();
  });

  describe('constructor', () => {
    it('should add default values when calling constructor without arguments', done => {
      const p = new Player();
      p.pieces.should.eql([]);
      p.cssClass.should.equal('');
      done();
    });

    it('should use passed array as pieces positions', done => {
      player.pieces.should.eql(PlayerPositions.player1);
      done();
    });

    it('should use passed string as css class', done => {
      player.cssClass.should.equal(testCssClass);
      done();
    });
  });

  describe('isAnyAtCoordinate', () => {
    let callbackReturnValue;
    let callbackSpy;

    beforeEach(done => {
      callbackReturnValue = 'Test isAnyAtCoordinate spy return value.';
      callbackSpy = sinon.spy(() => callbackReturnValue);
      done();
    });
    it('should return true if any of players pieces is on the given coordinate', done => {
      Player.isAnyAtCoordinate(players, playerCoordinate).should.be.true;
      done();
    });

    it('should return false if none of players pieces are on the given coordinate', done => {
      Player.isAnyAtCoordinate(players, nonExistentCoordinate).should.be.false;
      done();
    });

    it('should call callback with true and found player object if any of player pieces is on the given coordinate', done => {
      Player.isAnyAtCoordinate(players, playerCoordinate, callbackSpy);
      callbackSpy.should.have.been.calledWith(true, playerAtCoordinate);
      done();
    });

    it('should call callback with false and undefined if none of players pieces are on the given coordinate', done => {
      Player.isAnyAtCoordinate(players, nonExistentCoordinate, callbackSpy);
      callbackSpy.should.have.been.calledWith(false, undefined);
      done();
    });

    it('should return value returned by callback', done => {
      Player.isAnyAtCoordinate(players, playerCoordinate, callbackSpy).should.equal(callbackReturnValue);
      done();
    });

    it('should return value returned by callback even if finding failed', done => {
      Player.isAnyAtCoordinate(players, nonExistentCoordinate, callbackSpy).should.equal(callbackReturnValue);
      done();
    });
  });

  describe('getStyleAtPosition', () => {
    it('should return found player\'s style if any of player pieces is on the given coordinate', done => {
      Player.getStyleAtPosition(players, playerCoordinate).should.equal(playerAtCoordinate.cssClass);
      done();
    });

    it('should return empty string if none of players pieces are on the given coordinate', done => {
      Player.getStyleAtPosition(players, nonExistentCoordinate).should.equal('');
      done();
    });
  });
});

describe('PlayerPositions', () => {
  it('should be defined as an object', done => {
    PlayerPositions.should.be.an('object');
    done();
  });

  ['player1', 'player2'].forEach(key => {
    it(`should define ${key} coordinates`, done => {
      const player = PlayerPositions[key];
      player.should.be.of.length(4);
      player.forEach(pos => pos.should.have.all.keys(['x', 'y']));
      done();
    });
  });
});
