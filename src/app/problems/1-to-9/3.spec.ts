import { P3 } from './3';

describe('P3', () => {
  let problem: P3;

  beforeEach(() => {
    problem = new P3();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('6857');
  });
});
