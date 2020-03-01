import { P22 } from './22';

describe('P22', () => {
    let problem: P22;

    beforeEach(() => {
        problem = new P22();
    });

    it('should exist', () => {
        expect(problem).toBeDefined();
    });

    it('should return the correct answer', () => {
        expect(problem.getAnswer()).toEqual('871198282');
    });
});
