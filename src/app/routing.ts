import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TareasComponent } from './tareas/tareas.component';

import { PageNotFoundComponentComponent } from './commons/page-not-found-component/page-not-found-component.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { DetalleTareaComponent } from './tareas/detalle-tarea/detalle-tarea.component';
import { DetalleProyectoComponent } from './proyectos/detalle-proyecto/detalle-proyecto.component';
import { NewProjectComponent } from './proyectos/new-project/new-project.component';
import { NewTareaComponent } from './tareas/new-tarea/new-tarea.component';

const appRoutes: Routes = [
  { path: 'tareas', component: TareasComponent, pathMatch: 'full' },
  { path: 'tareas/new', component: NewTareaComponent, pathMatch: 'full' },
  { path: 'tareas/:tid', component: DetalleTareaComponent, pathMatch: 'full' },
  { path: 'proyectos', component: ProyectosComponent, pathMatch: 'full' },
  { path: 'proyectos/new', component: NewProjectComponent, pathMatch: 'full' },
  { path: 'proyectos/:pid', component: DetalleProyectoComponent, pathMatch: 'full' },
  { path: '',redirectTo: '/tareas',pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponentComponent }
];

export const routingProv: ModuleWithProviders = RouterModule.forRoot(appRoutes);