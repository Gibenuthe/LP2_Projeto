<<<<<<< Updated upstream
import { Component, EventEmitter, Output } from '@angular/core';
=======
import { Component, EventEmitter, OnInit, Output, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgForm, NgSelectOption } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Acolhedor } from './acolhedor.model';
import { AcolhedorService } from './acolhedor.service';
>>>>>>> Stashed changes
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


