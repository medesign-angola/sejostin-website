import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { Router, RouterModule } from '@angular/router';

const routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AppComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
