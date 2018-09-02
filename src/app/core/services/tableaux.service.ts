import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableauxService {
  private _items: Observable<any[]>;
  private itemsCollection: AngularFirestoreCollection<any>;

  constructor(
    private http: HttpClient,
    private afs: AngularFirestore
  ) {

  }

  public getCollection(col: string): void {
    this.itemsCollection = this.afs.collection<any>(col);
    this.items = this.itemsCollection.valueChanges();
  }

  get items(): Observable<any[]> {
    return this._items;
  }

  set items(res: Observable<any[]>) {
    this._items = res;
  }

  public getOptions(options: any): any[] {
    return Object.values(options);
  }

  public getcolumnsConfig(col: string): any[] {
    return [
      {name: 'activite', type: 'string'},
      {name: 'designation', type: 'string'},
      {name: 'lieu', type: 'string'},
      {name: 'client', type: 'string'},
      {name: 'date_debut', type: 'date'},
      {name: 'date_fin', type: 'date'},
      {name: 'intervenant', type: 'string'},
      {name: 'apporteur', type: 'string'},
      {name: 'prix_ht', type: 'currency'},
      {name: 'frais_ht', type: 'currency'},
      {name: 'com', type: 'currency'},
      {name: 'state', type: 'select'},
    ];
  }
}
