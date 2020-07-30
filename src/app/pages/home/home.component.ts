import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  next = '';

  pokemonsList = [];

  carga = false;
  loading = false;

  constructor( private pokedex: PokedexService ) { }

  ngOnInit(): void {
    this.obtenerPockemons();
  }

  obtenerPockemons(){
    this.pokedex.getPokemons(0,60).subscribe( ( res:any ) =>{

      this.next = res.next;

      for (let i = 0; i < res.results.length; i++) {
        let pokemon = res.results[i];
        this.pokedex.getPokemon(res.results[i].name).subscribe( (result:any) => {
          pokemon.sprites = result.sprites;
          pokemon.id = result.id;
          this.pokemonsList.push(pokemon);
        })  
      }

      setTimeout(() => {
        this.pokemonsList.sort(function (a, b){
          return (a.id - b.id)
        })
        setTimeout(() => {
          this.carga = true;
        }, 400);
      }, 1000);
    })
  }

  cargarMas(){
    this.loading = true;
    this.pokedex.getByURL(this.next).subscribe( ( res:any ) =>{

      this.next = res.next;

      for (let i = 0; i < res.results.length; i++) {
        let pokemon = res.results[i];
        this.pokedex.getPokemon(res.results[i].name).subscribe( (result:any) => {
          pokemon.sprites = result.sprites;
          pokemon.id = result.id;
          this.pokemonsList.push(pokemon);
        })  
      }

      setTimeout(() => {
        this.pokemonsList.sort(function (a, b){
          return (a.id - b.id)
        })
        setTimeout(() => {
          this.carga = true;
          this.loading = false;
        }, 400);
      }, 1000);
    })
  }

}
