import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/components/login/login.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'clients',
    loadChildren: './clients/clients.module#ClientsModule',
  },
  {
    path: 'prestations',
    loadChildren: './prestations/prestations.module#PrestationsModule',
  },
  {
    path: 'intervenants',
    loadChildren: './intervenants/intervenants.module#IntervenantsModule',
  },
  {
    path: 'apporteurs',
    loadChildren: './apporteurs/apporteurs.module#ApporteursModule',
  },
  {
    path: 'tableau',
    loadChildren: './tableaux/tableaux.module#TableauxModule',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
