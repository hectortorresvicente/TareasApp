import { Injectable } from '@angular/core';
import { Proyecto } from '../modelos/proyecto';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ProyectosService {
  private _proyectosStore: Proyecto[];
  private _apiProyectos: string = 'http://localhost:8080/ProyectosTareas/api/proyectos';
  private _proyectosObs: Observable<Proyecto[]>;

  constructor(private _httpClient: HttpClient) {
  }

  getProyectos(): Proyecto[] {
    return this._proyectosStore;
  }

  getProyectoById(pid: number): Proyecto {
    return this._proyectosStore.find((aP: Proyecto) => (aP.pid == pid));
  }

  getProyectosFromApi(): Observable<Proyecto[]> {

    if (this._proyectosStore) {
      this._proyectosObs= of(this._proyectosStore);
    } else if (this._proyectosObs) {
      //observable ya está en curso
    } else {
      this._proyectosObs = this._httpClient.get<Proyecto[]>(this._apiProyectos)
        .pipe(
          tap(
            data => {
              this._proyectosStore = data;
              localStorage.setItem('proyectos',JSON.stringify(this._proyectosStore));
            },
            error => console.log('error:', error)
          )
        );
    }

    return this._proyectosObs;
  }

  addProyecto(nuevoProj:Proyecto):boolean{
    nuevoProj.pid=(new Date()).getTime();
    this._proyectosStore.push(nuevoProj);
    return true;
  }

}
