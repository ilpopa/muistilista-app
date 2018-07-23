import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Muistilista } from './muistilista';
import { MuistilistaService } from './muistilista.service';

export enum SaveMode {
  None,
  New,
  Edit
}

@Component({
  selector: 'app-muistilista',
  templateUrl: './muistilista.component.html',
  styleUrls: ['./muistilista.component.css']
})

export class MuistilistaComponent implements OnInit {
  formGroup: FormGroup;
  muistit: Muistilista[];
  saveMode: SaveMode = SaveMode.None;
  headerText: string;

  constructor(private _muistilistaService: MuistilistaService, private _formBuilder: FormBuilder) {
    this.formGroup = _formBuilder.group({
      'id': '',
      'name': '',
      'due': '',
      'done': '',
      'notes': ''
    });
   }

  ngOnInit() {
    this.getMuistit();
  }

  getMuistit() {
    this.muistit = this._muistilistaService.getMuistitFromData();
  }

  saveMuistilista(muistilista: Muistilista) {
    if (muistilista.id) {
      this._muistilistaService.updateMuistilista(muistilista);
    } else {
      this._muistilistaService.addMuistilista(muistilista);
    }
    this.saveMode = SaveMode.None;
  }

  removeMuisti(muistilista: Muistilista) {
    this._muistilistaService.deleteMuisti(muistilista);
  }

  cancelEditMuisti() {
    this.formGroup.reset;
    this.saveMode = SaveMode.None;
  }

  showEditForm(muistilista: Muistilista) {
    if (!muistilista) {
      return;
    } 
    this.saveMode = SaveMode.Edit;
    this.headerText = 'Muokkaa muistilistaa';
    const editedMuistilista = Object.assign({}, muistilista, { due: this.applyLocale(muistilista.due)});
    this.formGroup.setValue(editedMuistilista);
  }

  showNewForm() {
    this.formGroup.reset();
    this.saveMode = SaveMode.New;
    this.headerText = 'Uusi asia';
  }

  showForm() {
    return this.saveMode !== SaveMode.None;
  }

  applyLocale(due) {
    return new DatePipe(navigator.language).transform(due, 'dd-MM-y');
  }

}
