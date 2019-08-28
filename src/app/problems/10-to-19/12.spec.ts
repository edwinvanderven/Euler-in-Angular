import { P12 } from './12';

describe('P12', () => {
  let problem: P12;

  beforeEach(() => {
    problem = new P12();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('76576500');
  });
});
