import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { ActivityComponent } from './activity/activity.component';
import { HomeBuilderComponent } from './home-builder/home-builder.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        DashboardComponent,
        ActivityComponent,
        HomeBuilderComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutes,
        RouterModule,
        MatIconModule
    ]
})
export class DashboardModule { }
