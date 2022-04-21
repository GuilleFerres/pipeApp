import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower: string = 'guille';
  nombreUpper: string = 'GUILLE';
  nombreCompleto: string = 'guIllerMo fErrEs';

  fecha: Date = new Date();
}
