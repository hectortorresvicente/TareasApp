import { Injectable } from '@angular/core';
import { Tarea } from '../modelos/tarea';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class TareasService {

  private _tareasStore: Tarea[];
  private _apiTareas: string = 'http://localhost:8080/ProyectosTareas/api/tareas';
  private _tareasObs: Observable<Tarea[]>;

  constructor(private _httpClient: HttpClient) {
    // this._tareasStore = [
    //   new Tarea(1, "Planificar", 1.2, 1),
    //   new Tarea(2, "Analiza", 6, 2),
    //   new Tarea(3, "Testar", 2, 1)
    // ];

    // console.log(JSON.stringify(this._tareasStore));
  }

  getTareas(): Tarea[] {
    return this._tareasStore;
  }

  getTareaById(tid: number): Tarea {
    return this._tareasStore.find((aT: Tarea) => (aT.tid == tid));
  }



  getTareasFromApi(): Observable<Tarea[]> {

    if (this._tareasStore) {
      this._tareasObs = of(this._tareasStore);
    } else if (this._tareasObs) {
      //observable ya está en curso
    } else {
      this._tareasObs = this._httpClient.get<Tarea[]>(this._apiTareas)
        .pipe(
          tap(
            data => this._tareasStore = data,
            error => console.log('error:', error)
          )
        );
    }

    return this._tareasObs;
  }

  addTarea(nuevaTarea: Tarea): boolean {
    nuevaTarea.tid = (new Date()).getTime();
    console.log(nuevaTarea);
    this._tareasStore.push(nuevaTarea);
    return true;
  }
}
