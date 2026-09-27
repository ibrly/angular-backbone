import {PipePipe} from './pipe.pipe';

describe('PipePipe', () => {
  const pipe = new PipePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('truncates strings longer than the limit and appends an ellipsis', () => {
    expect(pipe.transform('this string is shorten by custom pipe', 5)).toBe('this ...');
  });

  it('returns strings within the limit unchanged', () => {
    expect(pipe.transform('short', 5)).toBe('short');
    expect(pipe.transform('tiny', 8)).toBe('tiny');
  });

  it('defaults the limit to 10', () => {
    expect(pipe.transform('0123456789abc')).toBe('0123456789...');
  });
});
