import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './components/clients/clients.component';
import { SharedModule } from '../shared/shared.module';
import { ListClientsComponent } from './components/list-clients/list-clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { AddClientComponent } from './components/add-client/add-client.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ClientsRoutingModule
  ],
  declarations: [ClientsComponent, ListClientsComponent, AddClientComponent]
})
export class ClientsModule { }
