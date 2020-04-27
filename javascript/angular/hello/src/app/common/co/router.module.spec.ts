import { MyRouterModule } from './router.module';

describe('RouterModule', () => {
  let routerModule: MyRouterModule;

  beforeEach(() => {
    routerModule = new MyRouterModule();
  });

  it('should create an instance', () => {
    expect(routerModule).toBeTruthy();
  });
});
