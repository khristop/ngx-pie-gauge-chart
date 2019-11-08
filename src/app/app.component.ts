import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

   lose32RealsData = {
    name: "Ganhou Peso",
    value: 27,
    legend: "Perda de 32 mil reais",
    total: 100,
    color: "#FF223D "
  };
}
