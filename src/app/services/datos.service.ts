import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private _lorem:string = '';
  private _numLorem:number = 0;

  get_lorem(){
    return this._lorem;
  }
  
  set_lorem(cad:string){
    this._lorem=cad;
  }

  constructor() { }
}
