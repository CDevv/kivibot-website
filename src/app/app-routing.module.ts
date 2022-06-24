import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XyzComponent } from '../app/xyz/xyz.component';
import { HomeComponent } from '../app/home/home.component';

const routes: Routes = [
  {path: 'commands',component: XyzComponent},
  {path: 'home',component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
