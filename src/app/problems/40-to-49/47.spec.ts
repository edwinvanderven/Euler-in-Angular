import { P47 } from './47';

describe('P47', () => {
  let problem: P47;

  beforeEach(() => {
    problem = new P47();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('134043');
  });
});
