import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Prestation } from '../../models/prestation';
import { PrestationsService } from '../../../core/services/prestations.service';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  @Input() list: Observable<any>;
  @Input() columns: any[];
  @Input() options: string[];
  @Output() action: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private prestationsService: PrestationsService
  ) { }


  ngOnInit() {
  }

  public process(item: any, state: any) {
    console.log(item, state);
    this.action.emit({obj: item, state: state});
  }

  public edit(item: Prestation): void {
    // console.log(item);
    this.prestationsService.presta.next(item);
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
