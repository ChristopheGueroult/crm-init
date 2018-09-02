import { Component, OnInit } from '@angular/core';
import { TableauxService } from '../../../core/services/tableaux.service';
import { PrestationState } from '../../../shared/enums/prestationState.enum';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public itemToAdd: string;
  public listItems: Observable<any>;
  public columnsConfig: any[];
  public options: string[];
  constructor(
    private tableauxService: TableauxService,
    private router: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.router.data.subscribe((data) => {
      console.log(data);
      this.itemToAdd = data.collection;
      this.tableauxService.getCollection(data.collection);
      this.listItems = this.tableauxService.items;
      this.columnsConfig = this.tableauxService.getcolumnsConfig(data.collection);
      this.options = this.tableauxService.getOptions(PrestationState);
    });
  }

}
