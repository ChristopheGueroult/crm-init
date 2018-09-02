import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PrestationsService } from '../../../core/services/prestations.service';

@Component({
  selector: 'app-abstract-tab',
  templateUrl: './abstract-tab.component.html',
  styleUrls: ['./abstract-tab.component.css']
})
// export class AbstractTabComponent implements OnInit {
export class AbstractTabComponent implements OnInit {
  // public listItems: any[];
  public listItems: Observable<any>;
  public columnsConfig: any[];
  public options: string[];
  constructor(
    private prestationsService: PrestationsService
  ) { }

  ngOnInit() {
  }

  // public listFilter(states: any[]): any[] {
  //   return this.listItems.filter(item => states.includes(item.state));
  // }

  // public orderBy(critere: string): any[] {
  //   return this.listItems.sort(function(a: any, b: any) {
  //     // return a['date_debut'] - b['date_debut'];
  //     return a[critere] - b[critere];
  //   });
  // }

  public changeState(item) {
    item.obj.state = item.state;
    this.prestationsService.update(item.obj);
    this.prestationsService.presta.next(item.obj);
  }

}
