import { P13 } from './13';

describe('P13', () => {
  let problem: P13;

  beforeEach(() => {
    problem = new P13();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('5537376230');
  });
});
