<<<<<<< Updated upstream
import { Component, OnInit, Input } from '@angular/core';
=======
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Acolhedor } from '../acolhedor.model';
import { AcolhedorService } from '../acolhedor.service';
import { Subscription, Observable } from 'rxjs';
import { NgModel } from '@angular/forms';
>>>>>>> Stashed changes

@Component({
  selector: 'app-acolhedor-lista',
  templateUrl: './acolhedor-lista.component.html',
  styleUrls: ['./acolhedor-lista.component.css']
})
export class AcolhedorListaComponent implements OnInit {
  @Input() acolhedores = [];

  constructor() { }

  ngOnInit(): void {
  }

<<<<<<< Updated upstream
=======
  ngOnDestroy(): void {
    this.acolhedoresSubscription.unsubscribe();
  }

  onDelete(id: string): void {
    this.acolhedorService.removerAcolhedor(id);
  }

  procuraPais(pais: NgModel[]): void {
    this.acolhedorService.procuraPais(pais).subscribe({
      next: (data) => {
        this.acolhedores = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
>>>>>>> Stashed changes
}
