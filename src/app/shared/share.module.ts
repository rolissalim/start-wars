import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFilmComponent } from './list-film/list-film.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ListFilmComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ListFilmComponent
  ]
})
export class ShareModule { }
