import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolComponent } from './tool/tool.component';
import { RouterModule, Routes } from '@angular/router';
import { Cal1Component } from './cal-1/cal-1.component';
import { Cal2Component } from './cal-2/cal-2.component';
import { Cal3Component } from './cal-3/cal-3.component';
const appRoutes: Routes = [
  { path: 'tool', component: ToolComponent , children: [
    { path: '', component: Cal1Component },
    { path: 'cal-1', component: Cal1Component },
    { path: 'cal-2', component: Cal2Component },
    { path: 'cal-3', component: Cal3Component },
  ]}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      appRoutes
    )
  ],
  declarations: [ToolComponent, Cal1Component, Cal2Component, Cal3Component]
})
export class ToolModule { }
