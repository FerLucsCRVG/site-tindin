import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsGameComponent } from './components/details-game/details-game.component';
import { ListGamesComponent } from './components/list-games/list-games.component';
import { LoginTindinComponent } from './components/login-tindin/login-tindin.component';
import { SectionMainComponent } from './components/section-main/section-main.component';

const routes: Routes = [
  {path:"",redirectTo:'/games',pathMatch:'full'},
  {path:"games",component:ListGamesComponent},
  /*{path:"games/search/:title",component:ListGamesComponent},*/
  {path:"login",component:LoginTindinComponent},
  {path:"games/:_id",component:DetailsGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
