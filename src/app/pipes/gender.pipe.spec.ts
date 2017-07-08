import { GenderPipe } from './gender.pipe';

xdescribe('GenderPipe', () => {
  it('create an instance', () => {
    const pipe = new GenderPipe();
    expect(pipe).toBeTruthy();
  });
});
