import { Country } from "./country";
import { Region } from "./region.type";


export interface CacheStore{
  byCapital:TermCountries;
  byCountries:TermCountries;
  byRegion:regionCountries;
}

export interface TermCountries{
  term:string;
  countries:Country[];
}


export interface regionCountries{
  region:Region;
  countries:Country[];
}
