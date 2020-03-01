import { P40 } from './40';

describe('P40', () => {
    let problem: P40;

    beforeEach(() => {
        problem = new P40();
    });

    it('should exist', () => {
        expect(problem).toBeDefined();
    });

    it('should return the correct answer', () => {
        expect(problem.getAnswer()).toEqual('210');
    });
});
