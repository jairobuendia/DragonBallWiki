import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Imports de los diferentes componentes
import {DataViewModule} from 'primeng/dataview';
import {Card, CardModule} from 'primeng/card';
import { CharacterComponent } from './components/character/character.component';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { InfoCharacterComponent } from './components/info-character/info-character.component';
import {DialogModule} from 'primeng/dialog';
import {ChartModule} from 'primeng/chart';
import {ListboxModule} from 'primeng/listbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    InfoCharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataViewModule,
    CardModule,
    TableModule,
    InputTextModule,
    FormsModule,
    DialogModule,
    ChartModule,
    ListboxModule,
    BrowserAnimationsModule,
    ButtonModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
