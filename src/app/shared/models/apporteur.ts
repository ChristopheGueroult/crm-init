import { State } from '../enums/state.enum';

export interface Apporteur {
  id: string;
  nom_complet: string;
  tel: string;
  mobile: string;
  email: string;
  societe: string;
  com: number;
  state: State;
}
