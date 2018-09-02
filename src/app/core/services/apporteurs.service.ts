import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apporteur } from '../../shared/models/apporteur';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApporteursService {

  private _apporteurs: Observable<Apporteur[]>;
  private itemsCollection: AngularFirestoreCollection<Apporteur>;
  constructor(
    private http: HttpClient,
    private afs: AngularFirestore
  ) {
    this.itemsCollection = afs.collection<Apporteur>('apporteurs');
    this.apporteurs = this.itemsCollection.valueChanges();
  }

  get apporteurs(): Observable<Apporteur[]> {
    return this._apporteurs;
  }

  set apporteurs(app: Observable<Apporteur[]>) {
    this._apporteurs = app;
  }
}
