
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
 { path: 'tool-shelf', loadChildren: () => import('./tool-shelf/tool-shelf.module').then(m => m.ToolShelfModule) },
 { path: 'network', loadChildren: () => import('./network/network.module').then(m => m.NetworkModule) }
];

export const AppRoutes = RouterModule.forChild(routes);
