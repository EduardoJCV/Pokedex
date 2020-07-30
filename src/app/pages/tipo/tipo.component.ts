import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css']
})
export class TipoComponent implements OnInit {

  tipo = '';
  loading = false;
  pokemonsList = [];

  constructor( private activeR: ActivatedRoute, private pokedex: PokedexService ) { }

  ngOnInit(): void {
    this.carga();
  }

  carga(){
    this.tipo = this.activeR.snapshot.params.id;


    this.pokedex.getType(this.tipo).subscribe( ( res:any ) =>{
      for (let i = 0; i < res.pokemon.length; i++) {
        let pokemon = res.pokemon[i].pokemon;
        this.pokedex.getPokemon(res.pokemon[i].pokemon.name).subscribe( (result:any) => {
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
          console.log(this.pokemonsList);
          this.loading = true;
        }, 400);
      }, 1000);
    })
  }

}
