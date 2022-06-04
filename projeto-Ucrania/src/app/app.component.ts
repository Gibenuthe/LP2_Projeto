import { Component } from '@angular/core';
import { Acolhedor } from './acolhedor/acolhedor.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-Ucrania';
  acolhedores: Acolhedor[] = [];
  onAcolhedorAdicionado(acolhedor) {
    this.acolhedores = [...this.acolhedores, acolhedor];
    }

}
