import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../modelos/tarea';
import { Proyecto } from '../../modelos/proyecto';
import { ProyectosService } from '../../services/proyectos.service';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { Router } from '../../../../node_modules/@angular/router';
import { TareasService } from '../../services/tareas.service';

@Component({
  selector: 'app-new-tarea',
  templateUrl: './new-tarea.component.html',
  styleUrls: ['./new-tarea.component.css']
})
export class NewTareaComponent implements OnInit {

  newTarea:Tarea=new Tarea(0,'',0,0);
  proyectos:Proyecto[];

  constructor(private _proyectosService:ProyectosService,private _tareasService:TareasService,private _router:Router) { }

  ngOnInit() {
    this._proyectosService.getProyectosFromApi().subscribe(losProyectos=>
      {this.proyectos=losProyectos;}
    );
  }

  onSubmit(myForm:NgForm){
    if(myForm.valid){
      let isOk = this._tareasService.addTarea(this.newTarea);
      if(isOk) this._router.navigate(['/tareas']);
    }
  }

}
