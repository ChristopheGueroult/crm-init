import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../../core/services/prestations.service';
import { Prestation } from '../../../shared/models/prestation';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-edit-prestation',
  templateUrl: './edit-prestation.component.html',
  styleUrls: ['./edit-prestation.component.css']
})
export class EditPrestationComponent implements OnInit {
  prestation: BehaviorSubject<Prestation>;

  constructor(
    private prestationsService: PrestationsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.prestation = this.prestationsService.presta;
  }

  public update(item: Prestation) {
    this.prestationsService.update(item);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
