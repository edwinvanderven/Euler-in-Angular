import { P31 } from './31';

describe('P31', () => {
  let problem: P31;

  beforeEach(() => {
    problem = new P31();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('73682');
  });
});
