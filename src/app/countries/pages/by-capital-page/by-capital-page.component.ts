import { Component, OnInit, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit{

  public countries: Country[]=[];
  public isLoading:boolean=false;
  public initialValue:string='';

  constructor(private countriesService:CountriesService){}


  ngOnInit(): void {
    this.initialValue=this.countriesService.cacheStore.byCapital.term
    this.countries=this.countriesService.cacheStore.byCapital.countries;
  }

  searchByCapital(term:string):void{
    // console.log('Desde By-capital-page')
    // console.log({term})

    this.isLoading=true;

    this.countriesService.searchCapital(term)
    .subscribe(countries=>{
      this.countries=countries;
      this.isLoading=false;
    });
  }


}
