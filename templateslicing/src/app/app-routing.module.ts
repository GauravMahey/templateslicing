import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { TablesComponent } from './tables/tables.component';
import { WidgetsComponent } from './widgets/widgets.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'widgets',component:WidgetsComponent},
  {path:'forms',component:FormsComponent},
  {path:'tables',component:TablesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
