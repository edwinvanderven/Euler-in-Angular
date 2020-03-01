import { P8 } from './8';

describe('P8', () => {
    let problem: P8;

    beforeEach(() => {
        problem = new P8();
    });

    it('should exist', () => {
        expect(problem).toBeDefined();
    });

    it('should return the correct answer', () => {
        expect(problem.getAnswer()).toEqual('23514624000');
    });
});
