import { State } from '../enums/state.enum';

export interface Intervenant {
  id: string;
  nom_complet: string;
  tel: string;
  mobile: string;
  email: string;
  societe: string;
  tjm_ht: number;
  tva: number;
  adresse: string;
  cp: string;
  ville: string;
  siret: string;
  state: State;
}
