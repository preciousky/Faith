import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumComponent } from './forum/forum.component';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { InitialbodyComponent } from './initialbody/initialbody.component';
import { FavoriteComponent } from './favorite/favorite.component';
const appRoutes: Routes = [
  { path: 'forum', component: ForumComponent , children: [
    { path: '', component: InitialbodyComponent },
    { path: 'initialBody', component: InitialbodyComponent },
    { path: 'edit', component: EditComponent },
    { path: 'details', component: DetailsComponent },
    { path: 'favorite', component: FavoriteComponent }
  ]}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      appRoutes
    )
  ],
  declarations: [ForumComponent, EditComponent, DetailsComponent, InitialbodyComponent, FavoriteComponent]
})
export class ForumModule { }
