import { P26 } from './26';

describe('P26', () => {
  let problem: P26;

  beforeEach(() => {
    problem = new P26();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('983');
  });
});
