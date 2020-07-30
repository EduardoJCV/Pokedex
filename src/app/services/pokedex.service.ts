import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError }  from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor( private http: HttpClient ) { }

  url = 'https://pokeapi.co/api/v2/';

  getPokemon(id){
    return this.http.get(`${this.url}pokemon/${id}`);
  }

  getPokemons(start: number, limit: number){
    return this.http.get(`${this.url}pokemon/?offset=${start}&limit=${limit}`);
  }

  getByURL(url:string){
    return this.http.get(`${url}`);
  }

  ///////////

  getTypes(){
    return this.http.get(`${this.url}type`);
  }

  getType(id){
    return this.http.get(`${this.url}type/${id}`);
  }
}
