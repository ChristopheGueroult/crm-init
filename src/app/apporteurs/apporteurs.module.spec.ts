import { ApporteursModule } from './apporteurs.module';

describe('ApporteursModule', () => {
  let apporteursModule: ApporteursModule;

  beforeEach(() => {
    apporteursModule = new ApporteursModule();
  });

  it('should create an instance', () => {
    expect(apporteursModule).toBeTruthy();
  });
});
