import { TableauxModule } from './tableaux.module';

describe('TableauxModule', () => {
  let tableauxModule: TableauxModule;

  beforeEach(() => {
    tableauxModule = new TableauxModule();
  });

  it('should create an instance', () => {
    expect(tableauxModule).toBeTruthy();
  });
});
