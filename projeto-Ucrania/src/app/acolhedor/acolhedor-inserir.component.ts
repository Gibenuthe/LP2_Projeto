import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
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


  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('idAcolhedor')) {
        this.modo = 'editar';
        this.idAcolhedor = paramMap.get('idAcolhedor');
        this.acolhedor = this.acolhedorService.getAcolhedor(this.idAcolhedor);
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
