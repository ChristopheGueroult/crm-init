import { IntervenantsModule } from './intervenants.module';

describe('IntervenantsModule', () => {
  let intervenantsModule: IntervenantsModule;

  beforeEach(() => {
    intervenantsModule = new IntervenantsModule();
  });

  it('should create an instance', () => {
    expect(intervenantsModule).toBeTruthy();
  });
});
