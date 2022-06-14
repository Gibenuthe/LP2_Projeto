import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model'; //ARRUMAR IMPORT
import { TutorialService } from 'src/app/services/tutorial.service'; //ARRUMAR IMPORT

@Component({ //REVER TUDO ISSO
  selector: 'app-acolhedores-list',               //REVER
  templateUrl: './acolhedores-list.component.html', //REVER
  styleUrls: ['./acolhedores-list.component.css']   //REVER
})
export class AcolhedoresListComponent implements OnInit {

  acolhedores?: Acolhedor[];
  currentAcolhedor: Acolhedor = {};
  currentIndex = -1;
  title = '';

  constructor(private acolhedorService: acolhedorService) { }

  ngOnInit(): void {
    this.retrieveAcolhedores();
  }

  retrieveAcolhedores(): void {
    this.acolhedorService.getAll()
      .subscribe({
        next: (data) => {
          this.acolhedores = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveAcolhedores();
    this.currentAcolhedor = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(acolhedor: Acolhedor, index: number): void {
    this.currentAcolhedor = acolhedor;
    this.currentIndex = index;
  }

  removeAllAcolhedores(): void {
    this.acolhedorService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchTitle(): void {
    this.currentAcolhedor = {};
    this.currentIndex = -1;

    this.acolhedorService.findByTitle(this.pais) //
      .subscribe({
        next: (data) => {
          this.acolhedores = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
