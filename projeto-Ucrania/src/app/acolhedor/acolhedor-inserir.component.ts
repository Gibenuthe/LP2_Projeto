import { Component, EventEmitter, Output } from '@angular/core';
@Component({
selector: 'app-acolhedor-inserir',
templateUrl: './acolhedor-inserir.component.html',
styleUrls: ['./acolhedor-inserir.component.css'],
})
export class AcolhedorInserirComponent {
  @Output() clienteAdicionado = new EventEmitter();
  acolhedores = [];
    constructor() {}
    onAdicionarAcolhedor() {
      const cliente = {
      nome: this.nome,
      fone: this.fone,
      email: this.email,
      };
      this.clienteAdicionado.emit(cliente);
      }
}


