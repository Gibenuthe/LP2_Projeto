import { Component, OnInit, OnDestroy } from '@angular/core';
import { Acolhedor } from '../acolhedor.model';
import { AcolhedorService } from '../acolhedor.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-acolhedor-lista',
  templateUrl: './acolhedor-lista.component.html',
  styleUrls: ['./acolhedor-lista.component.css'],
})
export class AcolhedorListaComponent implements OnInit, OnDestroy {
  acolhedores: Acolhedor[] = [];
  private acolhedoresSubscription: Subscription;
  public estaCarregando = false;

  constructor(public acolhedorService: AcolhedorService) {}

  ngOnInit(): void {
    this.estaCarregando = true;
    this.acolhedorService.getAcolhedores();
    this.acolhedoresSubscription = this.acolhedorService
      .getListaDeAcolhedoresAtualizadaObservable()
      .subscribe((acolhedores: Acolhedor[]) => {
        this.estaCarregando = false;
        this.acolhedores = acolhedores;
      });
  }

  ngOnDestroy(): void {
    this.acolhedoresSubscription.unsubscribe();
  }

  onDelete (id: string): void{
    this.acolhedorService.removerAcolhedor(id);
   }

}
