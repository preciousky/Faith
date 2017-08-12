import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { InformationComponent } from './information/information.component';
import { PppComponent } from './ppp/ppp.component';
import { FofComponent } from './fof/fof.component';
import { NewsComponent } from './news/news.component';
import { Fof11Component } from './fof11/fof11.component';
import { Fof12Component } from './fof12/fof12.component';
import { Fof13Component } from './fof13/fof13.component';
import { Fof21Component } from './fof21/fof21.component';
import { Ppp11Component } from './ppp11/ppp11.component';
import { Ppp12Component } from './ppp12/ppp12.component';
import { Ppp13Component } from './ppp13/ppp13.component';
import { Ppp21Component } from './ppp21/ppp21.component';
import { Ppp22Component } from './ppp22/ppp22.component';
import { Ppp23Component } from './ppp23/ppp23.component';
import { GreenNews11Component } from './green-news11/green-news11.component';
import { GreenNews12Component } from './green-news12/green-news12.component';
import { GreenNews21Component } from './green-news21/green-news21.component';
import { GreenNews22Component } from './green-news22/green-news22.component';

const appRoutes: Routes = [
  { path: 'information', component: InformationComponent , children: [
    { path: 'fof', component: FofComponent},
    { path: 'fof-11', component: Fof11Component },
    { path: 'fof-12', component: Fof12Component },
    { path: 'fof-13', component: Fof13Component },
    { path: 'fof-21', component: Fof21Component },
    { path: 'ppp', component: PppComponent},
    { path: 'ppp-11', component: Ppp11Component },
    { path: 'ppp-12', component: Ppp12Component },
    { path: 'ppp-13', component: Ppp13Component },
    { path: 'ppp-21', component: Ppp21Component },
    { path: 'ppp-22', component: Ppp22Component },
    { path: 'ppp-23', component: Ppp23Component },
    { path: 'news', component: NewsComponent},
    { path: 'news-11', component: GreenNews11Component },
    { path: 'news-12', component: GreenNews12Component },
    { path: 'news-21', component: GreenNews21Component },
    { path: 'news-22', component: GreenNews22Component },
    { path: '', redirectTo: '/information/fof', pathMatch: 'full'}
  ]}
];

@NgModule({
  declarations: [
    InformationComponent,
    PppComponent,
    FofComponent,
    NewsComponent,
    Fof11Component,
    Fof12Component,
    Fof13Component,
    Fof21Component,
    Ppp11Component,
    Ppp12Component,
    Ppp13Component,
    Ppp21Component,
    Ppp22Component,
    Ppp23Component,
    GreenNews11Component,
    GreenNews12Component,
    GreenNews21Component,
    GreenNews22Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild (
      appRoutes
    )
  ],
  providers: [],
  exports: [
    RouterModule
  ]
})
export class InformationModule { }
