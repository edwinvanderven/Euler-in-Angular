import { P51 } from './51';

describe('P51', () => {
    let problem: P51;

    beforeEach(() => {
        problem = new P51();
    });

    it('should exist', () => {
        expect(problem).toBeDefined();
    });

    xit('should return the correct answer', () => {
        expect(problem.getAnswer()).toEqual('121313');
    });
});
