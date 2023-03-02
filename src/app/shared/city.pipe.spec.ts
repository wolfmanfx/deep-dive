import { CityPipe } from './city.pipe';

describe('CityPipe', () => {
  it('create an instance', () => {
    const pipe = new CityPipe({} as any);
    expect(pipe).toBeTruthy();
  });
});
