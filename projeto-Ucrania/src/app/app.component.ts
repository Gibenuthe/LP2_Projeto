import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-Ucrania';
  acolhedores = [];
  onAcolhedorAdicionado(acolhedor) {
    this.acolhedores = [...this.acolhedores, acolhedor];
    }

}
