import { State } from '../shared/enums/state.enum';
import { Client } from '../shared/models/client';
import { Tva } from '../shared/enums/tva.enum';

export const CLIENTS: Client[] = [
  {
    id: 'mlq',
    nom: 'Edugroupe',
    forme: 'Société',
    adresse: '152 rue Malakoff',
    cp: '75001',
    ville: 'Paris',
    contact: 'Audrey Magrot',
    tel: '01 22 55 44 77',
    email: 'contact@edugroupe.com',
    tjm_ht: 500,
    tva: Tva.NORMAL,
    siret: '14122255500045',
    state: State.ACTIF
  },
  {
    id: 'mlq',
    nom: 'm2i formation',
    forme: 'Société',
    adresse: '22 rue du père Corentin',
    cp: '75014',
    ville: 'Paris',
    contact: 'Stéphan Carpentier',
    tel: '01 55 44 66 33',
    email: 'contact@m2iformation.com',
    tjm_ht: 500,
    tva: Tva.NORMAL,
    siret: '14122255500045',
    state: State.ACTIF
  },
  {
    id: 'mlq',
    nom: 'mkr solutions',
    forme: 'Société',
    adresse: '27 rue du lac',
    cp: '75002',
    ville: 'Paris',
    contact: 'Sylvain Durif',
    tel: '01 22 55 44 88',
    email: 'contact@mkr.com',
    tjm_ht: 500,
    tva: Tva.NORMAL,
    siret: '14122255500045',
    state: State.INACTIF
  },
];
