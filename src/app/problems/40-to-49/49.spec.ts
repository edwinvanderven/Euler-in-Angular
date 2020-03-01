import { P49 } from './49';

describe('P49', () => {
    let problem: P49;

    beforeEach(() => {
        problem = new P49();
    });

    it('should exist', () => {
        expect(problem).toBeDefined();
    });

    it('should return the correct answer', () => {
        expect(problem.getAnswer()).toEqual('296962999629');
    });
});
