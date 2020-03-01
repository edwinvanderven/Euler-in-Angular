import { P6 } from './6';

describe('P6', () => {
    let problem: P6;

    beforeEach(() => {
        problem = new P6();
    });

    it('should exist', () => {
        expect(problem).toBeDefined();
    });

    it('should return the correct answer', () => {
        expect(problem.getAnswer()).toEqual('25164150');
    });
});
