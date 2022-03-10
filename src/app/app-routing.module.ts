import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CharacterComponent } from './components/character/character.component';
import { InfoCharacterComponent } from './components/info-character/info-character.component';

const routes: Routes = [{path:'', component:CharacterComponent }, {path:'character', component:CharacterComponent}, {path : 'info-character' , component : InfoCharacterComponent}, { path: 'info-character/:id', component : InfoCharacterComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
