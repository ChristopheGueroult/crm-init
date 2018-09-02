import { Injectable } from '@angular/core';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class DatesService {

  constructor(
    private ngbDateParserFormatter: NgbDateParserFormatter
  ) { }

  public dateToIso(arg: any): string {
    arg = new Date(this.ngbDateParserFormatter.format(arg));
    return arg.toISOString();
  }

  public dateIsoToDapicker(date: string) {
    return {
      year: new Date(date).getFullYear(),
        month: new Date(date).getMonth() + 1,
        day: new Date(date).getDate(),
    };
  }
}
