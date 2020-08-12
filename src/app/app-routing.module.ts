import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PeoplesComponent } from './view/peoples/peoples.component';
import { DetailComponent } from './view/peoples/detail/detail.component';

const routes: Routes = [
  {
    path: "",
    // component: PeoplesComponent,
    children: [
      {
        path: "",
        redirectTo: "people",
        pathMatch: "full"
      },

      {
        path: "people",
        component: PeoplesComponent,       
      },
      {
        path: "people/:id",
        component: DetailComponent
      }
    ]
  },
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
