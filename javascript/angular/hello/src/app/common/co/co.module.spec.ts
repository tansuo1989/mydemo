import { CoModule } from './co.module';

describe('CoModule', () => {
  let coModule: CoModule;

  beforeEach(() => {
    coModule = new CoModule();
  });

  it('should create an instance', () => {
    expect(coModule).toBeTruthy();
  });
});
