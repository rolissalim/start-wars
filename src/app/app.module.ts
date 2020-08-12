import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PeoplesComponent } from './view/peoples/peoples.component';
import { PersonService } from '@app-services/person.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {NgbPaginationModule, NgbAlertModule,NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    PeoplesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    NgbPaginationModule,
  ],
  exports:[
    PeoplesComponent
  ],

  providers: [
    PersonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
