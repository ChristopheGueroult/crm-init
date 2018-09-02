import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../../core/services/clients.service';
import { State } from '../../../shared/enums/state.enum';
import { Client } from '../../../shared/models/client';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent  implements OnInit {
  public listItems: Observable<Client[]>;
  public columnsConfig: any[];
  public options: State[];
  constructor(
    private clientsService: ClientsService
  ) {
  }

  ngOnInit() {
    this.listItems = this.clientsService.clients;
    this.columnsConfig = [
      {name: 'nom', type: 'string'},
      {name: 'contact', type: 'string'},
      {name: 'email', type: 'string'},
      {name: 'tel', type: 'string'},
      {name: 'ville', type: 'string'},
      {name: 'tjm_ht', type: 'currency'},
      {name: 'tva', type: 'percent'},
      {name: 'state', type: 'select'},
    ];
    this.options = Object.values(State);
  }

  public changeState(item) {
    item.obj.state = item.state;
    // this.prestationsService.update(item.obj);
    // this.prestationsService.presta.next(item.obj);
  }

}
