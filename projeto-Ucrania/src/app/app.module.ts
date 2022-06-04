import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AcolhedorInserirComponent } from './acolhedor/acolhedor-inserir.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, AcolhedorInserirComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
