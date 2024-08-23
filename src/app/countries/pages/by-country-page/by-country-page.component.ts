import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{


  public countries: Country[]=[];
  public isLoading:boolean=false;
  public initialValue:string='';

  constructor(private countriesService:CountriesService){}


  ngOnInit(): void {
    this.initialValue=this.countriesService.cacheStore.byCapital.term;
    this.countries=this.countriesService.cacheStore.byCapital.countries;
  }

  searchByCountry(term:string):void{
    // console.log('Desde By-capital-page')
    // console.log({term})

    this.isLoading=true;
    this.countriesService.searchCountry(term)
    .subscribe(countries=>{
      this.countries=countries;
      this.isLoading=false;
    });
  }


}
