import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutes } from './projects.routing';

@NgModule({
    declarations: [
        ProjectsComponent
    ],
    imports: [
        CommonModule,
        ProjectsRoutes,
    ]
})
export class ProjectsModule { }
