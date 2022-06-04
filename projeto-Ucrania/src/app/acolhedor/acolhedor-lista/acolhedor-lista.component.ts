import { Component, OnInit, Input } from '@angular/core';
import { Acolhedor } from '../acolhedor.model';
import { AcolhedorService } from '../acolhedor.service';

@Component({
  selector: 'app-acolhedor-lista',
  templateUrl: './acolhedor-lista.component.html',
  styleUrls: ['./acolhedor-lista.component.css']
})
export class AcolhedorListaComponent implements OnInit {
  @Input() acolhedores: Acolhedor[] = [];

  constructor(public acolhedorService: AcolhedorService) { }

  ngOnInit(): void {
    this.acolhedores = this.acolhedorService.getAcolhedores();
  }

}
