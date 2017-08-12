import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course.component';
import { RouterModule, Routes } from '@angular/router';
import { WayComponent } from './way/way.component';
import { DangerEduComponent } from './danger-edu/danger-edu.component';
import { LawComponent } from './law/law.component';
import { WayForRightComponent } from './way-for-right/way-for-right.component';
import { EduInfo1Component } from './edu-info1/edu-info1.component';
import { EduInfo2Component } from './edu-info2/edu-info2.component';
import { EduInfo3Component } from './edu-info3/edu-info3.component';
import { LawDetails1Component } from './law-details1/law-details1.component';
const appRoutes: Routes = [
  { path: 'course', component: CourseComponent , children: [
    { path: '', redirectTo: 'way' , pathMatch: 'full'  },
    { path: 'law', component: LawComponent },
    { path: 'eduInfo1', component: EduInfo1Component },
    { path: 'eduInfo2', component: EduInfo2Component },
    { path: 'eduInfo3', component: EduInfo3Component },
    { path: 'dangerEdu', component: DangerEduComponent },
    { path: 'way', component: WayComponent },
    { path: 'wayforright', component: WayForRightComponent},
    { path: 'lawdetails1', component: LawDetails1Component}
  ]}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      appRoutes
    )
  ],
  declarations : [
    CourseComponent,
    WayComponent,
    DangerEduComponent,
    LawComponent,
    WayForRightComponent,
    EduInfo1Component,
    EduInfo2Component,
    EduInfo3Component,
    LawDetails1Component]
})
export class CourseModule { }
