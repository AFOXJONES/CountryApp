import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  searchByCapital(term:string):void{
    console.log('Desde By-capital-page')
    console.log({term})
  }

  @Output()
  onValue(){

  }
}
