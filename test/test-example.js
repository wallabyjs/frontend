import * as chai from 'chai';
// import * as sinon from 'sinon';
chai.should();
chai.use(require('sinon-chai'));

describe('passing test', () => {
  it('should pass', done => {
    true.should.be.true;
    done();
  });
});
