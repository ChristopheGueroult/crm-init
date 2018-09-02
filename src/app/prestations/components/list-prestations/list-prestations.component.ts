import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../../core/services/prestations.service';
import { PrestationState } from '../../../shared/enums/prestationState.enum';
import { AbstractTabComponent } from '../../../shared/components/abstract-tab/abstract-tab.component';
import { Observable } from 'rxjs';
import { Prestation } from '../../../shared/models/prestation';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.css']
})
export class ListPrestationsComponent  implements OnInit {
  public listItems: Observable<Prestation[]>;
  public columnsConfig: any[];
  public options: PrestationState[];
  constructor(
    private prestationsService: PrestationsService
  ) {
  }

  ngOnInit() {
    this.listItems = this.prestationsService.prestations;
    this.columnsConfig = [
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
    this.options = Object.values(PrestationState);
  }

  public changeState(item) {
    item.obj.state = item.state;
    this.prestationsService.update(item.obj);
    this.prestationsService.presta.next(item.obj);
  }

}

