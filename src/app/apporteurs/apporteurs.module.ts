import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApporteursComponent } from './components/apporteurs/apporteurs.component';
import { ListApporteursComponent } from './components/list-apporteurs/list-apporteurs.component';
import { SharedModule } from '../shared/shared.module';
import { AddApporteurComponent } from './components/add-apporteur/add-apporteur.component';
import { ApporteursRoutingModule } from './apporteurs-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ApporteursRoutingModule
  ],
  declarations: [ApporteursComponent, ListApporteursComponent, AddApporteurComponent]
})
export class ApporteursModule { }
