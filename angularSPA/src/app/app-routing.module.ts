import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Views/home/home.component';
import { DetailComponent } from './Views/detail/detail.component';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "user/:id", component: DetailComponent },
  { path: "**", pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
