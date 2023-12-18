import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalpruebaComponent } from './pages/modalprueba/modalprueba.component';
import { AprendermoduleComponent } from './pages/aprendermodule/aprendermodule.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalpruebaComponent,
    AprendermoduleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
