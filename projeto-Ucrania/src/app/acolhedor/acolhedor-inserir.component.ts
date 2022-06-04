import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Acolhedor } from './acolhedor.model';
@Component({
  selector: 'app-acolhedor-inserir',
  templateUrl: './acolhedor-inserir.component.html',
  styleUrls: ['./acolhedor-inserir.component.css'],
})
export class AcolhedorInserirComponent {
  @Output() acolhedorAdicionado = new EventEmitter<Acolhedor>();
  nome: string;
  fone: string;
  email: string;
  onAdicionarAcolhedor(form: NgForm) {
    if (form.invalid) {
      return;
      }
    const acolhedor = {
      nome: form.value.nome,
      fone: form.value.fone,
      email: form.value.email,
    };
    this.acolhedorAdicionado.emit(acolhedor);
  }
}
