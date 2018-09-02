import { PrestationState } from '../enums/prestationState.enum';

export interface Prestation {
  id: string;
  activite: string;
  designation: string;
  client: string;
  lieu: string;
  date_debut: string;
  date_fin: string;
  intervenant: string;
  apporteur: string;
  prix_ht: number;
  frais_ht: number;
  com: number;
  state: PrestationState;
}
