import { computeScore } from './computeScore';

describe('computeScore', () => {
  it('should return 0 if no skittle is touched', () => {
    expect(computeScore([...Array(20).map(() => 0)])).toBe(0);
  });
});
