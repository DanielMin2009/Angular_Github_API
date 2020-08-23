import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Views/home/home.component';
import { DetailComponent } from './Views/detail/detail.component';
import { SeekerComponent } from './Components/Shared/seeker/seeker.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "user/:id", component: DetailComponent },
  { path: "search/:term", component: SeekerComponent },
  { path: "**", pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
