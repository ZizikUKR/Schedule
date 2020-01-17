import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';


const routes: Routes = [
    { path: 'projects', component: ProjectsComponent }
];

export const ProjectsRoutes = RouterModule.forChild(routes);
