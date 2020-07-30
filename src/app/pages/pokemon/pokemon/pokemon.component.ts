import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemon;

  loading = false;

  constructor( private activeR: ActivatedRoute, private pokedex: PokedexService ) { }

  id = this.activeR.snapshot.params.id;

  ngOnInit(): void {
    this.carga();
  }

  carga(){
    console.log(this.id);
      this.pokedex.getPokemon(this.id).subscribe((res:any)=>{
        console.log(res);
  
        this.pokemon = res;
  
        this.loading = true;
      });


  }

}
