//olaola//
import { Component, EventEmitter, OnInit, Output, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgForm, NgSelectOption } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Acolhedor } from './acolhedor.model';
import { AcolhedorService } from './acolhedor.service';
@Component({
  selector: 'app-acolhedor-inserir',
  templateUrl: './acolhedor-inserir.component.html',
  styleUrls: ['./acolhedor-inserir.component.css'],
})
export class AcolhedorInserirComponent implements OnInit {
  private modo: string = 'criar';
  private idAcolhedor: string;
  public acolhedor: Acolhedor;
  public estaCarregando: boolean = false;

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('idAcolhedor')) {
        this.modo = 'editar';
        this.idAcolhedor = paramMap.get('idAcolhedor');
        this.estaCarregando = true;
        this.acolhedorService
          .getAcolhedor(this.idAcolhedor)
          .subscribe((dadosAco) => {
            this.estaCarregando = false;
            this.acolhedor = {
              id: dadosAco._id,
              nome: dadosAco.nome,
              fone: dadosAco.fone,
              email: dadosAco.email,
              pais: dadosAco.pais,
              pessoas: dadosAco.pessoas,
              animais: dadosAco.animais,
              idiomas: dadosAco.idiomas
            };
          });
      } else {
        this.modo = 'criar';
        this.idAcolhedor = null;
      }
    });
  }

  constructor(
    public acolhedorService: AcolhedorService,
    public route: ActivatedRoute
  ) {}
  onSalvarAcolhedor(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.estaCarregando = true;
    if (this.modo === 'criar') {
      this.acolhedorService.adicionarAcolhedor(
        form.value.nome,
        form.value.fone,
        form.value.email,
        form.value.pais,
        form.value.pessoas,
        form.value.animais,
        form.value.idiomas
      );
    } else {
      this.acolhedorService.atualizarAcolhedor(
        this.idAcolhedor,
        form.value.nome,
        form.value.fone,
        form.value.email,
        form.value.pais,
        form.value.pessoas,
        form.value.animais,
        form.value.idiomas
      );
    }

    form.resetForm();
  }
}
