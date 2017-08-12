import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostComponent } from './host/host.component';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { SettingsComponent } from './settings/settings.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { SearchLogsComponent } from './search-logs/search-logs.component';
const appRoutes: Routes = [
  { path: 'host', component: HostComponent , children: [
    { path: '', component: FirstPageComponent},
    { path: 'firstpage', component: FirstPageComponent},
    { path: 'settings', component: SettingsComponent},
    { path: 'warehouse', component: WarehouseComponent},
    { path: 'searchlogs', component: SearchLogsComponent}
  ]}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      appRoutes
    )
  ],
  declarations: [HostComponent, FirstPageComponent, SettingsComponent, WarehouseComponent, SearchLogsComponent]
})
export class HostModule { }
