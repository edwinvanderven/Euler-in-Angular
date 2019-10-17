import { P46 } from './46';

describe('P46', () => {
  let problem: P46;

  beforeEach(() => {
    problem = new P46();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('5777');
  });
});
