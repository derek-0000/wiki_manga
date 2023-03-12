import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserLikesPageRoutingModule } from './user-likes-routing.module';

import { UserLikesPage } from './user-likes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserLikesPageRoutingModule
  ],
  declarations: [UserLikesPage]
})
export class UserLikesPageModule {}
