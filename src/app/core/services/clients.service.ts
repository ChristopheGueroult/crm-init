import { Injectable } from '@angular/core';
import { CLIENTS } from '../clients';
import { Client } from '../../shared/models/client';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  // private _clients: any;
  private _clients: Observable<Client[]>;
  private itemsCollection: AngularFirestoreCollection<Client>;
  constructor(
    private http: HttpClient,
    private afs: AngularFirestore
  ) {
    // this.clients = CLIENTS;
    this.itemsCollection = afs.collection<Client>('clients');
    this.clients = this.itemsCollection.valueChanges();
  }

  get clients(): Observable<Client[]> {
    return this._clients;
  }

  set clients(pres: Observable<Client[]>) {
    this._clients = pres;
  }
}
