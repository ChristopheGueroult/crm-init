import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { TableauRoutingModule } from './tableau-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TableauxComponent } from './components/tableaux/tableaux.component';

@NgModule({
  imports: [
    CommonModule,
    TableauRoutingModule,
    SharedModule
  ],
  declarations: [ListComponent, AddComponent, EditComponent, TableauxComponent]
})
export class TableauxModule { }
