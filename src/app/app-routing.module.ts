import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TipoComponent } from './pages/tipo/tipo.component';
import { PokemonInfoComponent } from './pages/pokemon/pokemon-info/pokemon-info.component';
import { PokemonStatsComponent } from './pages/pokemon/pokemon-stats/pokemon-stats.component';
import { PokemonComponent } from './pages/pokemon/pokemon/pokemon.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tipo/:id', component: TipoComponent },
  { path: 'pokemon/:id', component:  PokemonComponent , children: [
    { path: 'pokemon-info', component: PokemonInfoComponent },
    { path: 'pokemon-movimientos', component: PokemonStatsComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'pokemon-info' }
  ]},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
