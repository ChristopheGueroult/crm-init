import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntervenantsComponent } from './components/intervenants/intervenants.component';
import { ListIntervenantsComponent } from './components/list-intervenants/list-intervenants.component';
import { SharedModule } from '../shared/shared.module';
import { IntervenantsRoutingModule } from './intervenants-routing.module';
import { AddIntervenantComponent } from './components/add-intervenant/add-intervenant.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    IntervenantsRoutingModule
  ],
  declarations: [IntervenantsComponent, ListIntervenantsComponent, AddIntervenantComponent]
})
export class IntervenantsModule { }
