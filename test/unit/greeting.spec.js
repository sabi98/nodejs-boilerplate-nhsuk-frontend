import defaultGreeting from '../../app/scripts/greeting';

const chai = require('chai');

const { expect } = chai;

describe('Greeting messages', () => {
  it('a default greeting message should be returned to the user', () => {
    const greeting = defaultGreeting();
    expect(greeting).to.equal('Hello World!');
  });
});
