import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsGameComponent } from './components/details-game/details-game.component';
import { LoginTindinComponent } from './components/login-tindin/login-tindin.component';
import { SectionMainComponent } from './components/section-main/section-main.component';

const routes: Routes = [
  {path:"",component:SectionMainComponent},
  {path:"games",component:SectionMainComponent},
  {path:"login",component:LoginTindinComponent},
  {path:"games/:id",component:DetailsGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
