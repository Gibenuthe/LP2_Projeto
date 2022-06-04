import { Injectable } from '@angular/core';
import { Acolhedor } from './acolhedor.model';

@Injectable({ providedIn: 'root' })
export class AcolhedorService {
  private acolhedores: Acolhedor[] = [];
  getAcolhedores(): Acolhedor[] {
    return [...this.acolhedores];
  }

  adicionarAcolhedor(nome: string, fone: string, email: string) {
    const acolhedor: Acolhedor = {
    nome: nome,
    fone: fone,
    email: email,
    };
    this.acolhedores.push(acolhedor);
    }

}
