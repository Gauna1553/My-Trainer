import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EjerciciosService {

  constructor() { }
  //Esta funcion al ejercutarse retorna la informacion de los objetos
  getEjercicioData(){
    return [
      {
        nombre: 'Press de Banca Plana',
        grupomuscular: 'Pecho',
        rangorep: '6-10'
      },
      {
        nombre: 'Press de Banca Inclinada',
        grupomuscular: 'Pecho',
        rangorep: '6-10'
      },
      {
        nombre: 'Pec Deck',
        grupomuscular: 'Pecho',
        rangorep: '8-12'
      },
      {
        nombre: 'Jalon en polea',
        grupomuscular: 'Espalda',
        rangorep: '6-10'
      },
      {
        nombre: 'Remo Gironda',
        grupomuscular: 'Espalda',
        rangorep: '6-10'
      },
    ]
  }
  //Esta funcion genera una promesa, al ejercutarse encapsula la otra funcion
  getEjercicio(){
    return Promise.resolve(this.getEjercicioData())
  }
}
