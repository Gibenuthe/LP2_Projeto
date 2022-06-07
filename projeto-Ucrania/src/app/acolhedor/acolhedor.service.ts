import { Injectable } from '@angular/core';
import { Acolhedor } from './acolhedor.model';
import { map, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AcolhedorService {
  private acolhedores: Acolhedor[] = [];
  private listaAcolhedoresAtualizada = new Subject<Acolhedor[]>();

  constructor(private httpClient: HttpClient) {}

  getAcolhedores(): void {
    this.httpClient
      .get<{ mensagem: string; acolhedores: any }>(
        'http://localhost:3000/api/acolhedores'
      )
      .pipe(
        map((dados) => {
          return dados.acolhedores.map((acolhedor) => {
            return {
              id: acolhedor._id,
              nome: acolhedor.nome,
              fone: acolhedor.fone,
              email: acolhedor.email,
            };
          });
        })
      )
      .subscribe((acolhedores) => {
        this.acolhedores = acolhedores;
        this.listaAcolhedoresAtualizada.next([...this.acolhedores]);
      });
  }

  adicionarAcolhedor(nome: string, fone: string, email: string) {
    const acolhedor: Acolhedor = {
      id: null,
      nome: nome,
      fone: fone,
      email: email,
    };
    this.httpClient
      .post<{ mensagem: string, id: string }>(
        'http://localhost:3000/api/acolhedores',
        acolhedor
      )
      .subscribe((dados) => {
        acolhedor.id = dados.id;
        this.acolhedores.push(acolhedor);
        this.listaAcolhedoresAtualizada.next([...this.acolhedores]);
      });
  }

  removerAcolhedor (id: string): void{
    this.httpClient.delete(`http://localhost:3000/api/acolhedores/${id}`).subscribe(() => {
      this.acolhedores = this.acolhedores.filter((cli) => {
        return cli.id !== id
        });
        this.listaAcolhedoresAtualizada.next([...this.acolhedores]);
    });
    }

  getListaDeAcolhedoresAtualizadaObservable() {
    return this.listaAcolhedoresAtualizada.asObservable();
  }

  getAcolhedor (idAcolhedor: string){
    return {...this.acolhedores.find((aco) => aco.id === idAcolhedor)};
    }

}
