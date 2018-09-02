import { State } from '../enums/state.enum';
import { Tva } from '../enums/tva.enum';

export interface Client {
  id: string;
  nom: string;
  forme: string;
  adresse: string;
  cp: string;
  ville: string;
  contact: string;
  tel: string;
  email: string;
  tjm_ht: number;
  tva: Tva;
  siret: string;
  state: State;
}
