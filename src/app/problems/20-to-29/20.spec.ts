import { P20 } from './20';

describe('P20', () => {
  let problem: P20;

  beforeEach(() => {
    problem = new P20();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('683');
  });
});
