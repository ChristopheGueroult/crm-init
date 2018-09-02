import { Component, OnInit } from '@angular/core';
import { IntervenantsService } from '../../../core/services/intervenants.service';
import { State } from '../../../shared/enums/state.enum';
import { Observable } from 'rxjs';
import { Intervenant } from '../../../shared/models/intervenant';

@Component({
  selector: 'app-list-intervenants',
  templateUrl: './list-intervenants.component.html',
  styleUrls: ['./list-intervenants.component.css']
})
export class ListIntervenantsComponent implements OnInit {
  public listItems: Observable<Intervenant[]>;
  public columnsConfig: any[];
  public options: State[];
  constructor(
    private intervenantsService: IntervenantsService
  ) {
  }

  ngOnInit() {
    this.listItems = this.intervenantsService.intervenants;
    this.columnsConfig = [
      {name: 'nom_complet', type: 'string'},
      {name: 'tel', type: 'string'},
      {name: 'mobile', type: 'string'},
      {name: 'email', type: 'string'},
      {name: 'societe', type: 'string'},
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
