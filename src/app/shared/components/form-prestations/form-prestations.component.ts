import { Component, OnInit, OnChanges,  Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientsService } from '../../../core/services/clients.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { Client } from '../../models/client';
import { IntervenantsService } from '../../../core/services/intervenants.service';
import { Intervenant } from '../../models/intervenant';
import { ApporteursService } from '../../../core/services/apporteurs.service';
import { Apporteur } from '../../models/apporteur';
import { PrestationState } from '../../enums/prestationState.enum';
import { DatesService } from '../../../core/services/dates.service';
import { Prestation } from '../../models/prestation';
import { PrestationsService } from '../../../core/services/prestations.service';

@Component({
  selector: 'app-form-prestations',
  templateUrl: './form-prestations.component.html',
  styleUrls: ['./form-prestations.component.css']
})
export class FormPrestationsComponent implements OnInit, OnChanges {
  public form: FormGroup;
  public clients: Observable<Client[]>;
  public intervenants: Observable<Intervenant[]>;
  public apporteurs: Observable<Apporteur[]>;
  public states: PrestationState[];
  @Output() item: EventEmitter<any> = new EventEmitter();
  @Input() myitemToEdit: BehaviorSubject<Prestation>;
  private itemToEdit: any;
  constructor(
    private fb: FormBuilder,
    private clientsService: ClientsService,
    private intervenantsService: IntervenantsService,
    private apporteursService: ApporteursService,
    private datesService: DatesService,
    private prestationsService: PrestationsService
  ) { }

  ngOnChanges() {

    // console.log(this.myitemToEdit.value);
  }


  ngOnInit() {
    this.prestationsService.presta.subscribe((data) => {
      console.log(data);
      this.itemToEdit = data;
      this.createForm();
    });

    this.clients = this.clientsService.clients;
    this.intervenants = this.intervenantsService.intervenants;
    this.apporteurs = this.apporteursService.apporteurs;
    this.states = Object.values(PrestationState);
  }

  private createForm(): void {
    this.form = this.fb.group({
      activite: this.itemToEdit ? this.itemToEdit.activite : '',
      designation: this.itemToEdit ? this.itemToEdit.designation : '',
      lieu: this.itemToEdit ? this.itemToEdit.lieu : '',
      client: this.itemToEdit ? this.itemToEdit.client : '',
      date_debut: this.itemToEdit ? this.datesService.dateIsoToDapicker(this.itemToEdit.date_debut) : '',
      date_fin: this.itemToEdit ? this.datesService.dateIsoToDapicker(this.itemToEdit.date_fin) : '',
      intervenant: this.itemToEdit ? this.itemToEdit.intervenant : '',
      apporteur: this.itemToEdit ? this.itemToEdit.apporteur : '',
      prix_ht: this.itemToEdit ? this.itemToEdit.prix_ht : '',
      frais_ht: this.itemToEdit ? this.itemToEdit.frais_ht : '',
      com: this.itemToEdit ? this.itemToEdit.com : '',
      state: this.itemToEdit ? this.itemToEdit.state : '',
    });
  }

  public getItem(item: Prestation) {
    const data = this.form.value;
    if (!this.itemToEdit) {
      return data;
    }
    const id = this.itemToEdit.id;
    return {id, ...data};
  }

  public process(): void {
    const date_debut = this.form.get('date_debut');
    const date_fin = this.form.get('date_fin');
    date_debut.setValue(this.datesService.dateToIso(date_debut.value));
    date_fin.setValue(this.datesService.dateToIso(date_fin.value));
    this.item.emit(this.getItem(this.form.value));
    this.form.reset();
  }

  public setVal(obj: any, val: string): void {
    this.form.get(obj).setValue(this.form.get(obj).value.val);
  }
}
