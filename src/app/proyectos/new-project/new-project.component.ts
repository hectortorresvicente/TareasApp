import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../modelos/proyecto';
import { NgForm } from '@angular/forms';
import { ProyectosService } from '../../services/proyectos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  newProject:Proyecto=new Proyecto(0,'');

  constructor(private _proyectosService:ProyectosService, private _router:Router) { }

  ngOnInit() {
  }

  onSubmit(myForm:NgForm){
    console.log(myForm,this.newProject);
    if(myForm.valid){
      let isOk = this._proyectosService.addProyecto(this.newProject);
      if(isOk) this._router.navigate(['/proyectos']);
    }
  }

}
