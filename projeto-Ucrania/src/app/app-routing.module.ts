import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcolhedorInserirComponent } from './acolhedor/acolhedor-inserir.component';
import { AcolhedorListaComponent } from './acolhedor/acolhedor-lista/acolhedor-lista.component';
import { BuscaComponent } from './busca/busca.component';

const routes: Routes = [
  { path: '', component: AcolhedorListaComponent },
  {path: 'criar', component: AcolhedorInserirComponent},
  {path: 'editar/:idAcolhedor', component: AcolhedorInserirComponent},
  {path: 'busca',component: BuscaComponent}


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
