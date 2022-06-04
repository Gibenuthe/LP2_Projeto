import { Component, OnInit, Input } from '@angular/core';

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

}
