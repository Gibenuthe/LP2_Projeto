import { Injectable } from '@angular/core';
import { Acolhedor } from './acolhedor.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AcolhedorService {
  private acolhedores: Acolhedor[] = [];
  private listaAcolhedoresAtualizada = new Subject<Acolhedor[]>();

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
    this.listaAcolhedoresAtualizada.next([...this.acolhedores]);
  }

  getListaDeAcolhedoresAtualizadaObservable() {
    return this.listaAcolhedoresAtualizada.asObservable();
  }
}
