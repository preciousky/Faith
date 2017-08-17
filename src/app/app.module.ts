import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { FundModule } from './fund/fund.module';
import { InformationModule } from './information/information.module';
import { CourseModule } from './course/course.module';
import { ToolModule } from './tool/tool.module';
import { ForumModule } from './forum/forum.module';
import { LoginModule } from './login/login.module';
import { HostModule } from './host/host.module';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { ForUserComponent } from './for-user/for-user.component';
import { ForPrivacyComponent } from './for-privacy/for-privacy.component';
import { ForDangerComponent } from './for-danger/for-danger.component';
import { ForOurTeamComponent } from './for-our-team/for-our-team.component';
import {CommunicationService} from './communication.service';

const appRoutes: Routes = [
  // { path: 'home', component: HomeComponent },
  // { path: 'information', component: InformationComponent },
  { path: 'forDanger', component: ForDangerComponent },
  { path: 'forUser', component: ForUserComponent },
  { path: 'forPrivacy', component: ForPrivacyComponent },
  { path: 'forOurTeam', component: ForOurTeamComponent },
  { path: '', redirectTo: '/home' , pathMatch: 'full' },
  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NoPageFoundComponent,
    ForUserComponent,
    ForPrivacyComponent,
    ForDangerComponent,
    ForOurTeamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    FundModule,
    InformationModule,
    CourseModule,
    ToolModule,
    ForumModule,
    LoginModule,
    HostModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  bootstrap: [AppComponent],
  exports: [
    RouterModule
  ],
  providers: [ CommunicationService ]
})
export class AppModule { }
