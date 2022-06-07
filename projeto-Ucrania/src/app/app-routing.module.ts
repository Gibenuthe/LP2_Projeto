import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcolhedorInserirComponent } from './acolhedor/acolhedor-inserir.component';
import { AcolhedorListaComponent } from './acolhedor/acolhedor-lista/acolhedor-lista.component';

const routes: Routes = [
  { path: '', component: AcolhedorListaComponent },
  {path: 'criar', component: AcolhedorInserirComponent},
  {path: 'editar/:idAcolhedor', component: AcolhedorInserirComponent}


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    ],
  exports: [
      RouterModule
    ]

})
export class AppRoutingModule {}
