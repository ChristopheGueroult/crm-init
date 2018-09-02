import { Prestation } from '../shared/models/prestation';
import { PrestationState } from '../shared/enums/prestationState.enum';

export const PRESTATIONS: Prestation[] = [
  {
    id: 'dslj',
    activite: 'Prestation',
    designation: 'Angular',
    client: 'Otto company',
    lieu: 'Paris',
    date_debut: '2018-09-20T22:00:00.000Z',
    date_fin: '2018-09-24T22:00:00.000Z',
    intervenant: 'Pierre Nédélec',
    apporteur: 'William Durand',
    prix_ht: 3500,
    frais_ht: 0,
    com: 0,
    state: PrestationState.OPTION
  },
  {
    id: 'dng',
    activite: 'Prestation',
    designation: 'Angular',
    client: 'Magna It',
    lieu: 'Perpignan',
    date_debut: '2018-07-20T22:00:00.000Z',
    date_fin: '2018-07-23T22:00:00.000Z',
    intervenant: 'Jeffrey Simonet',
    apporteur: 'William Durand',
    prix_ht: 2000,
    frais_ht: 400,
    com: 0,
    state: PrestationState.CONFIRME
  },
  {
    id: 'hhds',
    activite: 'Prestation',
    designation: 'Angular',
    client: 'Kernex',
    lieu: 'Paris',
    date_debut: '2018-09-24T22:00:00.000Z',
    date_fin: '2018-09-28T22:00:00.000Z',
    intervenant: 'Jérôme Dessuti',
    apporteur: 'Sandrine Lalemand',
    prix_ht: 3500,
    frais_ht: 0,
    com: 350,
    state: PrestationState.OPTION
  },
  {
    id: 'gdfd',
    activite: 'Prestation',
    designation: 'Angular',
    client: 'Qrdim Ldd',
    lieu: 'Dijon',
    date_debut: '2018-09-24T22:00:00.000Z',
    date_fin: '2018-09-28T22:00:00.000Z',
    intervenant: 'Christophe Gueroult',
    apporteur: 'William Durand',
    prix_ht: 3500,
    frais_ht: 0,
    com: 0,
    state:  PrestationState.ANNULE
  },
];

