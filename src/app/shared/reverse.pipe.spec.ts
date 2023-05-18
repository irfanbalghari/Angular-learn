import { ReversePipe } from "./reverse.pipe";

describe('Pipe: revers pipe', () => {

  it('should reverse the string', () => {
   let resversePipe = new ReversePipe();
    expect(resversePipe.transform('Hello')).toEqual('olleH');
  });
});