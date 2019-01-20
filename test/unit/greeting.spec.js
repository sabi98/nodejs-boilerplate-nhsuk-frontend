const chai = require('chai');
const expect = chai.expect;

import defaultGreeting from '../../app/scripts/greeting';

describe('Greeting messages', function () {
  it('a default greeting message should be returned to the user', function(){
    const greeting = defaultGreeting();
    expect(greeting).to.equal('Hello World!');
  });
});