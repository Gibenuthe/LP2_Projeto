import { Injectable } from '@angular/core';
import { Acolhedor } from './acolhedor.model';
import { map, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AcolhedorService {
  private acolhedores: Acolhedor[] = [];
  private listaAcolhedoresAtualizada = new Subject<Acolhedor[]>();

  constructor(private httpClient: HttpClient, private router: Router) {}

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
              pais: acolhedor.pais,
              pessoas: acolhedor.pessoas,
              animais: acolhedor.animais,
              idiomas: acolhedor.idiomas,
            };
          });
        })
      )
      .subscribe((acolhedores) => {
        this.acolhedores = acolhedores;
        this.listaAcolhedoresAtualizada.next([...this.acolhedores]);
      });
  }

  adicionarAcolhedor(
    nome: string,
    fone: string,
    email: string,
    pais: string,
    pessoas: Number,
    animais: boolean,
    idiomas: string
  ) {
    const acolhedor: Acolhedor = {
      id: null,
      nome: nome,
      fone: fone,
      email: email,
      pais: pais,
      pessoas: pessoas,
      animais: animais,
      idiomas: idiomas,
    };
    this.httpClient
      .post<{ mensagem: string; id: string }>(
        'http://localhost:3000/api/acolhedores',
        acolhedor
      )
      .subscribe((dados) => {
        acolhedor.id = dados.id;
        this.acolhedores.push(acolhedor);
        this.listaAcolhedoresAtualizada.next([...this.acolhedores]);
        this.router.navigate(['/']);
      });
  }

  removerAcolhedor(id: string): void {
    this.httpClient
      .delete(`http://localhost:3000/api/acolhedores/${id}`)
      .subscribe(() => {
        this.acolhedores = this.acolhedores.filter((cli) => {
          return cli.id !== id;
        });
        this.listaAcolhedoresAtualizada.next([...this.acolhedores]);
      });
  }

  atualizarAcolhedor(
    id: string,
    nome: string,
    fone: string,
    email: string,
    pais: string,
    pessoas: Number,
    animais: boolean,
    idiomas: string
  ) {
    const acolhedor: Acolhedor = {
      id,
      nome,
      fone,
      email,
      pais,
      pessoas,
      animais,
      idiomas,
    };
    this.httpClient
      .put(`http://localhost:3000/api/acolhedores/${id}`, acolhedor)
      .subscribe((res) => {
        const copia = [...this.acolhedores];
        const indice = copia.findIndex((aco) => aco.id === acolhedor.id);
        copia[indice] = acolhedor;
        this.acolhedores = copia;
        this.listaAcolhedoresAtualizada.next([...this.acolhedores]);
        this.router.navigate(['/']);
      });
  }

  getListaDeAcolhedoresAtualizadaObservable() {
    return this.listaAcolhedoresAtualizada.asObservable();
  }

  getAcolhedor(idAcolhedor: string) {
    //return { ...this.acolhedores.find((aco) => aco.id === idAcolhedor) };
    return this.httpClient.get<{
      _id: string;
      nome: string;
      fone: string;
      email: string;
      pais: string;
      pessoas: Number;
      animais: boolean;
      idiomas: string;
    }>(`http://localhost:3000/api/acolhedores/${idAcolhedor}`);
  }
}
