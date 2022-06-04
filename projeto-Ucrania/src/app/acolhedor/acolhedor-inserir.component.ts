import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AcolhedorService } from './acolhedor.service';
@Component({
  selector: 'app-acolhedor-inserir',
  templateUrl: './acolhedor-inserir.component.html',
  styleUrls: ['./acolhedor-inserir.component.css'],
})
export class AcolhedorInserirComponent {
  constructor(public acolhedorService: AcolhedorService) {}
  onAdicionarAcolhedor(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.acolhedorService.adicionarAcolhedor(
      form.value.nome,
      form.value.fone,
      form.value.email
    );
    form.resetForm();
  }
}
