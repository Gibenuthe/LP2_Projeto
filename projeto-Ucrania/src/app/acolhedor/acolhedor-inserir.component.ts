import { Component } from '@angular/core';
@Component({
selector: 'app-acolhedor-inserir',
templateUrl: './acolhedor-inserir.component.html',
styleUrls: ['./acolhedor-inserir.component.css'],
})
export class AcolhedorInserirComponent {
  nome: string;
  fone: string;
  email: string;
  onAdicionarAcolhedor() {
    console.log('inserindo acolhedor...');
    }

}

