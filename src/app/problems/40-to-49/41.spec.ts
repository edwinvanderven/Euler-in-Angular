import { P41 } from './41';

describe('P41', () => {
  let problem: P41;

  beforeEach(() => {
    problem = new P41();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('7652413');
  });
});
