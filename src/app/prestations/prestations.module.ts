import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestationsComponent } from './components/prestations/prestations.component';
import { SharedModule } from '../shared/shared.module';
import { ListPrestationsComponent } from './components/list-prestations/list-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { AddPrestationComponent } from './components/add-prestation/add-prestation.component';
import { EditPrestationComponent } from './components/edit-prestation/edit-prestation.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PrestationsRoutingModule
  ],
  declarations: [
    PrestationsComponent,
    ListPrestationsComponent,
    AddPrestationComponent,
    EditPrestationComponent,
  ]
})
export class PrestationsModule { }
