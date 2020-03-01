import { P14 } from './14';

describe('P14', () => {
    let problem: P14;

    beforeEach(() => {
        problem = new P14();
    });

    it('should exist', () => {
        expect(problem).toBeDefined();
    });

    it('should return the correct answer', () => {
        expect(problem.getAnswer()).toEqual('837799');
    });
});
