import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Intervenant } from '../../shared/models/intervenant';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IntervenantsService {
  private _intervenants: Observable<Intervenant[]>;
  private itemsCollection: AngularFirestoreCollection<Intervenant>;
  constructor(
    private http: HttpClient,
    private afs: AngularFirestore
  ) {
    this.itemsCollection = afs.collection<Intervenant>('intervenants');
    this.intervenants = this.itemsCollection.valueChanges();
  }

  get intervenants(): Observable<Intervenant[]> {
    return this._intervenants;
  }

  set intervenants(inter: Observable<Intervenant[]>) {
    this._intervenants = inter;
  }
}
