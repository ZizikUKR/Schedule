import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { ActivityComponent } from './activity/activity.component';
import { HomeBuilderComponent } from './home-builder/home-builder.component';

@NgModule({
    declarations: [
        DashboardComponent,
        ActivityComponent,
        HomeBuilderComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutes,
    ]
})
export class DashboardModule { }
