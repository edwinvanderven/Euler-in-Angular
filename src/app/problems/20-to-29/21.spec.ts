import { P21 } from './21';

describe('P21', () => {
    let problem: P21;

    beforeEach(() => {
        problem = new P21();
    });

    it('should exist', () => {
        expect(problem).toBeDefined();
    });

    it('should return the correct answer', () => {
        expect(problem.getAnswer()).toEqual('31626');
    });
});
