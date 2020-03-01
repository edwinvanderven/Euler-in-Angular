import { P30 } from './30';

describe('P30', () => {
    let problem: P30;

    beforeEach(() => {
        problem = new P30();
    });

    it('should exist', () => {
        expect(problem).toBeDefined();
    });

    it('should return the correct answer', () => {
        expect(problem.getAnswer()).toEqual('443839');
    });
});
