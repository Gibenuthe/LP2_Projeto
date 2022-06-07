import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AcolhedorInserirComponent } from './acolhedor/acolhedor-inserir.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule} from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { AcolhedorListaComponent } from './acolhedor/acolhedor-lista/acolhedor-lista.component';
import { AcolhedorService } from './acolhedor/acolhedor.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent, AcolhedorInserirComponent, CabecalhoComponent, AcolhedorListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule,
  ],
  providers: [AcolhedorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
