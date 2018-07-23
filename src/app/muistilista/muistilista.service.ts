import { Injectable } from '@angular/core';

import { Muistilista } from './muistilista';
import { MUISTI_ASIAT } from '../../api/muisti-data';

@Injectable()
export class MuistilistaService {
  pItems: Muistilista[] = MUISTI_ASIAT;

  constructor() { }

  getMuistitFromData(): Muistilista[] {
    return this.pItems;
  }
  addMuistilista(muistilista: Muistilista) {
    this.pItems.push(muistilista);
  }
  updateMuistilista(muistilista: Muistilista) {
    const index = this.pItems.map(x => x.id).indexOf(muistilista.id);
    this.pItems[index] = muistilista;
  }
  deleteMuisti(muistilista: Muistilista) {
    this.pItems.splice(this.pItems.indexOf(muistilista), 1);
  }
}
