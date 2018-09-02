import { Component, OnInit } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';
import { PrestationsService } from '../../../core/services/prestations.service';

@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.css']
})
export class AddPrestationComponent implements OnInit {

  constructor(
    private prestationsService: PrestationsService
  ) { }

  ngOnInit() {
  }

  public add(item: Prestation): void {
    // console.log(item);
    this.prestationsService.add(item);
  }

}
