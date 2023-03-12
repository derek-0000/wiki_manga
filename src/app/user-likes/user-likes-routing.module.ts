import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLikesPage } from './user-likes.page';

const routes: Routes = [
  {
    path: '',
    component: UserLikesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserLikesPageRoutingModule {}
