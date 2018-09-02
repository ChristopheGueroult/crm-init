import { Injectable } from '@angular/core';
import { Prestation } from '../../shared/models/prestation';
import { PRESTATIONS } from '../prestations';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';


@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  // private _prestations: any;
  public presta: BehaviorSubject<any> = new BehaviorSubject(null);
  private _prestations: Observable<Prestation[]>;
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  constructor(
    private http: HttpClient,
    private afs: AngularFirestore
  ) {
    // this.prestations = PRESTATIONS;
    this.itemsCollection = afs.collection<Prestation>('prestations');
    // this.itemsCollection = this.getCollection('prestations');
    this.prestations = this.itemsCollection.valueChanges();
  }

  get prestations(): Observable<Prestation[]> {
    return this._prestations;
  }

  set prestations(pres: Observable<Prestation[]>) {
    this._prestations = pres;
  }

  // private getCollection(col: string): AngularFirestoreCollection<any> {
  //   return this.afs.collection<any>(col);
  // }

  public add(item: Prestation): void {
    item.id = this.afs.createId();
    this.itemsCollection.doc(item.id).set(item)
      .catch(error => console.log(error));
  }

  public update(item: Prestation): void {
    // console.log(item);
    this.itemsCollection.doc(item.id).update(item)
      .catch(error => console.log(error));
  }
}
