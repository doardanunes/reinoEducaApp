import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings = {
    numeroDeCartas: 6,
    delay: 1000,
    colNumero: 3
  }

  constructor() { }
  getColumnSize(){
    return 12/this.settings.colNumero;
  }
}
