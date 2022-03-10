import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { ReactiveFormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {Card, CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {SpeedDialModule} from 'primeng/speeddial';
import {DialogModule} from 'primeng/dialog';
import {ChartModule} from 'primeng/chart';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import { InfoCharacterComponent } from './components/info-character/info-character.component';
import {DataViewModule} from 'primeng/dataview';
import { CharacterComponent } from './components/character/character.component';


@NgModule({
  declarations: [
    AppComponent,
    InfoCharacterComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    ReactiveFormsModule,
    ButtonModule,
    SpeedDialModule,
    DialogModule,
    BrowserAnimationsModule,
    PanelModule,
    InputTextModule,
    DataViewModule,
    InputNumberModule,
    TableModule,
    ChartModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
