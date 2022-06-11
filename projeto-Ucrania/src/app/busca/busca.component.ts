import { Component } from '@angular/core';
import { Acolhedor } from '../acolhedor/acolhedor.model';


@Component({
    selector: 'app-root',
    templateUrl: './busca.component.html',
    styleUrls: ['./busca.component.css']
  })
  export class BuscaComponent {
    title = 'projeto-Ucrania';
    acolhedores: Acolhedor[] = [];
    onAcolhedorAdicionado(acolhedor) {
      this.acolhedores = [...this.acolhedores, acolhedor];
      }
  }