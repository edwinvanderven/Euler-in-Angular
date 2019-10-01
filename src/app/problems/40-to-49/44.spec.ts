import { P44 } from './44';

describe('P44', () => {
  let problem: P44;

  beforeEach(() => {
    problem = new P44();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('5482660');
  });
});
