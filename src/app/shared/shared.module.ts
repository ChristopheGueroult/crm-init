import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { StateDirective } from './directives/state.directive';
import { IntitulePipe } from './pipes/intitule.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AbstractTabComponent } from './components/abstract-tab/abstract-tab.component';
import { RouterModule } from '@angular/router';
import { FormPrestationsComponent } from './components/form-prestations/form-prestations.component';
import { ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee);
library.add(faPlusCircle);

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  declarations: [NavComponent, TableauComponent, StateDirective, IntitulePipe, AbstractTabComponent, FormPrestationsComponent],
  exports: [NavComponent, TableauComponent, FormPrestationsComponent, FontAwesomeModule]
})
export class SharedModule { }
