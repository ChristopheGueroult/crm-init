import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Prestation } from '../../shared/models/prestation';
import { tap, take } from 'rxjs/operators';
import { PrestationsService } from './prestations.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrestationResolverService implements Resolve<Prestation> {

  constructor(
    private prestationsService: PrestationsService
  ) { }

  resolve(): Observable<Prestation> {
    return this.prestationsService.presta.pipe(
      take(1)
    );
  }
}
