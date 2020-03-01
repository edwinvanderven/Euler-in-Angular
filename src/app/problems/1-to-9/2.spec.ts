import { P2 } from './2';

describe('P2', () => {
    let problem: P2;

    beforeEach(() => {
        problem = new P2();
    });

    it('should exist', () => {
        expect(problem).toBeDefined();
    });

    it('should return the correct answer', () => {
        expect(problem.getAnswer()).toEqual('4613732');
    });
});
