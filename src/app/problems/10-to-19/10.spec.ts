import { P10 } from './10';

describe('P10', () => {
    let problem: P10;

    beforeEach(() => {
        problem = new P10();
    });

    it('should exist', () => {
        expect(problem).toBeDefined();
    });

    it('should return the correct answer', () => {
        expect(problem.getAnswer()).toEqual('142913828922');
    });
});
