import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../modelos/proyecto';
import { ProyectosService } from '../../services/proyectos.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-detalle-proyecto',
  templateUrl: './detalle-proyecto.component.html',
  styleUrls: ['./detalle-proyecto.component.css']
})
export class DetalleProyectoComponent implements OnInit {

  elproyecto:Proyecto;
  idProyecto:number;
  constructor(private _proyectosService:ProyectosService,private _route:ActivatedRoute) { }

  ngOnInit() {    
    this._route.params.subscribe(receivedParams=>{
      this.idProyecto=receivedParams['pid'];
      this.elproyecto=this._proyectosService.getProyectoById(this.idProyecto);
    })
  }

}
