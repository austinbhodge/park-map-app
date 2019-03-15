import { EllipsisPipe } from './ellipsis.pipe';

describe('EllipsisPipe', () => {
  let pipe: EllipsisPipe;

  beforeEach(() => {
    pipe = new EllipsisPipe();
  });

  afterEach(() => {
    pipe = null;
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should Ellipsis the word', () => {
    expect(pipe.transform('this is a longer argument', 5)).toEqual('this ...');
  });

  it('should return full string if length is equal to string', () => {
    const string = 'this is a longer argument';
    expect(pipe.transform(string, string.length)).toEqual('this is a longer argument');
  });

  it('should return full string if length is greater than string.length', () => {
    const string = 'this is a longer argument';
    expect(pipe.transform(string, string.length + 5)).toEqual('this is a longer argument');
  });

  it('should return entire string if no length is provided', () => {
    expect(pipe.transform('this is a longer argument', undefined)).toEqual('this is a longer argument');
  });
});
