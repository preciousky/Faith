import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollComponent } from './enroll/enroll.component';
import { RouterModule, Routes } from '@angular/router';
import { IdentifyComponent } from './identify/identify.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ActivateComponent } from './activate/activate.component';
import {CommunicationService} from '../communication.service';
const appRoutes: Routes = [
  { path: 'enroll', component: EnrollComponent },
  { path: 'identify', component: IdentifyComponent },
  { path: 'questionnaire', component: QuestionnaireComponent },
  { path: 'activate', component: ActivateComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      appRoutes
    )
  ],
  declarations: [ EnrollComponent, IdentifyComponent, QuestionnaireComponent, ActivateComponent]
})
export class LoginModule { }
