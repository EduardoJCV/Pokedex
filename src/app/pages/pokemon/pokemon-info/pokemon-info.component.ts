import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {

  pokemon;

  loading = false;

  constructor( private activeR: ActivatedRoute, private pokedex: PokedexService ) { }

  id;



  ngOnInit(): void {
    this.activeR.parent.params.subscribe( (res:any) =>{
      this.id = res.id;
    });
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
