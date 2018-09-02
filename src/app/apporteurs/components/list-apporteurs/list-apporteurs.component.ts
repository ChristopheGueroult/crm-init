import { Component, OnInit } from '@angular/core';
import { ApporteursService } from '../../../core/services/apporteurs.service';
import { State } from '../../../shared/enums/state.enum';
import { Observable } from 'rxjs';
import { Apporteur } from '../../../shared/models/apporteur';

@Component({
  selector: 'app-list-apporteurs',
  templateUrl: './list-apporteurs.component.html',
  styleUrls: ['./list-apporteurs.component.css']
})
export class ListApporteursComponent implements OnInit {
  public listItems: Observable<Apporteur[]>;
  public columnsConfig: any[];
  public options: State[];
  constructor(
    private apporteursService: ApporteursService
  ) {
  }

  ngOnInit() {
    this.listItems = this.apporteursService.apporteurs;
    this.columnsConfig = [
      {name: 'nom_complet', type: 'string'},
      {name: 'societe', type: 'string'},
      {name: 'email', type: 'string'},
      {name: 'tel', type: 'string'},
      {name: 'mobile', type: 'string'},
      {name: 'com', type: 'percent'},
      {name: 'state', type: 'select'},
    ];
    this.options = Object.values(State);
  }

  public changeState(item) {
    item.obj.state = item.state;
    // this.apporteursService.update(item.obj);
    // this.apporteursService.presta.next(item.obj);
  }

}
